//zapisywanie celu do bazy

$('#save').click(

function saveGoal(){

//let user = "GSrjFTKIaHdr9zgpYLx5p3z9YUL2";	
let user = firebase.auth().currentUser.uid;
let targetName = $('#target-name').val();
let targetDescription = $('#target-description').val();

function zero(liczba) {
    return liczba=(liczba < 10)? "0"+liczba : liczba;
}
let today = new Date();
let start = today.getFullYear()+'-'+(zero(today.getMonth()+1))+'-'+zero(today.getDate());

let end = $('#date').val();
let agree =  $('#check').is(':checked');
let progress = 0;

let name = "user-" + user+"/"+targetName;
let dbRef = firebase.database().ref().child(name);


	if (targetName == ""){
	alert ("Nazwa twojego celu nie może być pusta");
	}
	
	else if (targetDescription == ""){
	alert ("Opis twojego celu nie może być pusty");
	}
	
	else if (end == ""){
	alert ("Data zakończenia nie może być pusta");
	}
	
	else {
 	dbRef.set({
		user: user,
		targetName: targetName,
		targeDescription : targetDescription,
		startDate : start,
		endDate : end,
		agree : agree,
		progress : progress
	})
	console.log(name +"\n"+user+"\n"+targetName+"\n"+targetDescription+"\n"+start+"\n"+end+"\n"+agree+"\n"+progress);
	
	if (confirm("Zapisano cel o nazwie: "+ targetName +".")) {
		window.location.replace("./list-of-targets.html");
    } else {      
    }
	
	}
	})
