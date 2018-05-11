//wyświetlanie szczegółów wybranego celu

document.getElementById("tar-details").onload = function() {showList()};

function showList() {
	
	var tarList = document.getElementById("select-target");
	var user = firebase.auth().currentUser.uid;
	//var user = "GSrjFTKIaHdr9zgpYLx5p3z9YUL2"
	var userName = "user-" + user;
	var dbRefList = firebase.database().ref().child(userName);

dbRefList.on('child_added', snap =>  {
	
	var para = document.createElement("OPTION");
	para.innerText = snap.key+" ";
	para.value = snap.key;
	tarList.appendChild(para);
})
}

$('#show').click(

function showDetails() {	
	
	var user = firebase.auth().currentUser.uid;
	//var user = "GSrjFTKIaHdr9zgpYLx5p3z9YUL2"
	var dTargetName = $('#select-target').val();
	var name = "user-" + user+"/"+dTargetName;
	var dbRef = firebase.database().ref().child(name);
	
	dbRef.on('value', snap => console.log(snap.val()));
			
	dbRef.on('value', function(snapshot) {
		$('#target-description').val(snapshot.child('targeDescription').val());
		$('#date').val(snapshot.child('endDate').val());
		$('#check').val(snapshot.child('agree').val());
		$('#tar-progr').val(snapshot.child('progress').val());
	})
	
	var slider = document.getElementById("tar-progr");
	var output = document.getElementById("demo");
	output.innerHTML = slider.value;

	slider.oninput = function() {
	output.innerHTML = this.value;
}
})