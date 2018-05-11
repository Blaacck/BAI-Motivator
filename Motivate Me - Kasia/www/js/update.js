//edycja pól formularza

$('#update').click(

function update(){	

	var mTargetName = $('#select-target').val();
	var mTargetDescription = $('#target-description').val();
	var mEnd = $('#date').val();
	var mAgree =  $('#check').is(':checked');
	var mProgress = $('#tar-progr').val();

	var user = firebase.auth().currentUser.uid;
	//var user = "GSrjFTKIaHdr9zgpYLx5p3z9YUL2"
	var name = "user-" + user+"/"+mTargetName;
	var dbRef = firebase.database().ref().child(name);
	
	dbRef.set({
		targetName: mTargetName,
		targeDescription : mTargetDescription,
		endDate : mEnd,
		agree : mAgree,
		progress : mProgress
	});
	alert ;
		if (confirm("Zmiany zostały zapisane")) {
		window.location.replace("./list-of-targets.html");
    } else {      
    }
});
