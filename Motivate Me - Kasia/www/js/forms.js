//zapisywanie celu do bazy

var rootRef = firebase.database().ref().child('goal'+ Math.floor((Math.random() * 100000)));

$('#save').click(
function(){
	rootRef.set({
		user: "dL2lNHV9OYa8PUVCkRaSNqEkcHd2",
		cel: $('#cel').val(),
		opis : $('#opis').val(),
		startDate : new Date(),
		endDate : $('#endDate').val(),
		zgoda : $('#agree').is(':checked')
	});
})

  