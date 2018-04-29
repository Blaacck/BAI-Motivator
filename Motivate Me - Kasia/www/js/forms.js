//zapisywanie celu do bazy

$('#save').click(

function saveGoal(){
	
var user = "dL2lNHV9OYa8PUVCkRaSNqEkcHd2";
var cel = $('#cel').val();
var opis = $('#opis').val();

function zero(liczba) {
    return liczba=(liczba < 10)? "0"+liczba : liczba;
}
var today = new Date();
var start = today.getFullYear()+'-'+(zero(today.getMonth()+1))+'-'+zero(today.getDate());

var end = $('#endDate').val();
var zgoda =  $('#agree').is(':checked');
var name = "goal-" + user +"-"+ cel;
var rootRef = firebase.database().ref().child(name);


	if (cel == ""){
	alert ("Cel field cannot be blank");
	}
	
	else if (opis == ""){
	alert ("Opis field cannot be blank");
	}
	
	else if (end == ""){
	alert ("Date field cannot be blank");
	}
	
	else {
	rootRef.set({
		user: user,
		cel: cel,
		opis : opis,
		startDate : start,
		endDate : end,
		zgoda : zgoda
	})
	alert ("the goal has been saved");
	}
console.log(name +"\n"+user+"\n"+cel+"\n"+opis+"\n"+start+"\n"+end+"\n"+zgoda);
	}
)
