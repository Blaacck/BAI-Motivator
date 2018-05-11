//wyświetlanie dwóch celów na stronie głównej

document.getElementById("tar-list").onload = function() {showList()};

function showList() {

	let tarList = document.getElementById("tar-details");
	let user = firebase.auth().currentUser.uid;
	//let user = "GSrjFTKIaHdr9zgpYLx5p3z9YUL2"
	let userName = "user-" + user;
	let dbRefList = firebase.database().ref().child(userName);

	dbRefList.orderByKey().limitToFirst(2).on('child_added', snap =>  {
	
		let para = document.createElement('P');
		para.innerText = snap.key;
		para.class ="target";
		tarList.appendChild(para);
		
		let bar = document.createElement("DIV");
		bar.id ="progressbar";
		para.appendChild(bar);
		
		let fill = document.createElement("DIV");
		fill.id ="progressbar-fill";
	
			let name = "user-"+user+"/"+snap.key;
			let dbRef = firebase.database().ref().child(name)
			let prc;
			
			dbRef.on('value', function(snapshot) {
			prc = snapshot.child('progress').val();
			})
		
		fill.style="width:"+prc+"%;";
		bar.appendChild(fill);
		
		})
}