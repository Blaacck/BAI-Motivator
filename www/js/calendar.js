var currentDate = new Date(), year = currentDate.getFullYear(), month = currentDate.getMonth();
		
$(document).ready(function(){
	clearCalendar();
	setCalendar();
});
		
function clearCalendar(){
	for(w = 1; w <= 6; w++){
		for(d = 1; d <= 7; d++){
			$('#week-'+ w + ' td:nth-child('+ d + ')').text("");
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
}
		
function nextMonth(){
	if(month == 11){
		month = 0, year += 1;
	}else{
		month += 1;
	}
	clearCalendar();
	setCalendar();
}