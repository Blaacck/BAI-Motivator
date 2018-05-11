//wyświetlanie dwóch celów na stronie głównej

document.getElementById("tar-list").onload = function() {showList()};

function showList() {

	var tarList = document.getElementById("tar-details");
	var user = firebase.auth().currentUser.uid;
	//var user = "GSrjFTKIaHdr9zgpYLx5p3z9YUL2"
	var userName = "user-" + user;
	var dbRefList = firebase.database().ref().child(userName);

	dbRefList.orderByKey().limitToFirst(2).on('child_added', snap =>  {
	
		var para = document.createElement('P');
		para.innerText = snap.key;
		para.class ="target";
		tarList.appendChild(para);
		
		var bar = document.createElement("DIV");
		bar.id ="progressbar";
		para.appendChild(bar);
		
		var fill = document.createElement("DIV");
		fill.id ="progressbar-fill";
	
			var name = "user-"+user+"/"+snap.key;
			var dbRef = firebase.database().ref().child(name)
			var prc;
			
			dbRef.on('value', function(snapshot) {
			prc = snapshot.child('progress').val();
			})
		
		fill.style="width:"+prc+"%;";
		bar.appendChild(fill);
		
		})
}