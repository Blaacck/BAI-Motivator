var currentDate = new Date(), year = currentDate.getFullYear(), month = currentDate.getMonth();
var targetsDates = [];
		
$(document).ready(function(){
	clearCalendar();
	setCalendar();
	getTargets();

});

function getTargets(){
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			var user = firebase.auth().currentUser.uid;
			var userName = "user-" + user;
			var dbRefList = firebase.database().ref().child(userName);

			dbRefList.on('child_added', snap => {
			
				var key = snap.key;
				var name = "user-"+user+"/"+key;
					var dbRef = firebase.database().ref().child(name)
					
					
					dbRef.on('value', function(snapshot) {
						var date = snapshot.child('endDate').val().split("-");
						
						if(date != null && date != undefined ){
							setTarget({"year": date[0], "month": date[1], "day": date[2] });
							console.log(date);
						}
					});
			});

		}
	});
}
	
function setTarget(date){
	if(date.year == year && parseInt(date.month) == (month + 1)){
		var calDays = $(".calendar-day");

		calDays.each(function(){
			if($(this).text() == parseInt(date.day))
				$(this).addClass("active");

		});
	}
}

function clearCalendar(){
	for(w = 1; w <= 6; w++){
		for(d = 1; d <= 7; d++){
			$('#week-'+ w + ' td:nth-child('+ d + ')').text("").removeClass("active");
		}
	}
}
		
function setCalendar(){
	var firstDay = new Date(year, month, 1);
	var lastDay = new Date(year, month + 1, 0);
	var monthName =  firstDay.toString().split(" ")[1];
	var daysInMonth = parseInt(lastDay.toString().split(" ")[2]) - parseInt(firstDay.toString().split(" ")[2]) + 1;	
	var firstDayOfMonth = firstDay.getDay(); //when was first day of month i.e 2 => Tue	
			
	//sunday
	if(firstDayOfMonth == 0)
	firstDayOfMonth = 7;
		
	$('#calendar-month-th').text(monthName + " " + year);
			
	for(w = 1, countDays = 1; w <= 6; w++){
		for(d = 1; d <= 7; d++){
			if( (d >= firstDayOfMonth || w > 1) && countDays <= daysInMonth ){
				$('#week-'+ w + ' td:nth-child('+ d + ')').text(countDays);
				countDays++;
			}
		}
	}
}
		
function prevMonth(){
	if(month == 0){
		month = 11, year -= 1;
	}else{
		month -= 1;
	}
	clearCalendar();
	setCalendar();
	getTargets();
}
		
function nextMonth(){
	if(month == 11){
		month = 0, year += 1;
	}else{
		month += 1;
	}
	clearCalendar();
	setCalendar();
	getTargets();
}