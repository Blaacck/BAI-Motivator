function success(msg){
	alert(msg);
}

function error(err){
	alert(err);
}

FCMPlugin.getToken(function(token) {
	alert(token);
	FCMPlugin.onNotification(function(data){
		if(data.wasTapped){
			alert( JSON.stringify(data) );
		}else{
			alert( JSON.stringify(data) );
		}
	});
});