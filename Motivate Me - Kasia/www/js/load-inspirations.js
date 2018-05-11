var accessToken = "AYZ3yO9EnN5aT1vMwV-1YHrvihM4FS0PdRcWCIVE6lyWIkA9uAAAAAA";
		var requestedFields = "image%2Cid"
		var requestUrl = "https://api.pinterest.com/v1/boards/";
		var travelingBoardId = "795941002832715800";
		var foodBoardId = "795941002832715844";
		var motivationBoardId = "795941002832715846";
		var fitnessBoardId = "795941002832715845";
		var picturesArr = [];
		var index = 0;


		$(document).ready(function(){

			var category = getCategoryFromUrl();

			switch(category){
			case 'food':  	
				loadImage("img/food.jpg");
				requestUrl += foodBoardId;
				break;

			case 'traveling': 	
				loadImage('img/travel.jpg');
				requestUrl += travelingBoardId;
				break;

			case 'fitness':
				loadImage('img/fitness.jpg');
				requestUrl += fitnessBoardId;
				break;

			case 'motivation':
			default: 
				loadImage('img/motivation.jpg');
				requestUrl += motivationBoardId;
				break;
			}

			requestUrl += "/pins/?access_token=" + accessToken + "&fields=" + requestedFields;

			var request = $.ajax({
			    method: 'GET',
			    url: requestUrl, 
			    dataType: 'json',
			    async: true
			}).done(function( obj ) {
			   	picturesArr = obj.data;
			  	index = Math.floor(Math.random() * 100) % obj.data.length;
			  	loadImage(obj.data[index]['image']['original']['url']);
			  	//alert(obj.data[index]['image']['original']['url']);
			});
    	}); 

		function loadImage(url){
			if(url != "")
				$('#motivation').attr('src',url);
		}

		function nextImage(){
			++index;
			if(index > (picturesArr.length - 1))
				index = 0;
			if(picturesArr.length > 0 && ( typeof picturesArr[index]['image']['original']['url'] !== undefined ))
				loadImage(picturesArr[index]['image']['original']['url']);
		}

		function prevImage(){
			--index;
			if(index < 0)
				index = picturesArr.length - 1;
			if(picturesArr.length > 0 && ( typeof picturesArr[index]['image']['original']['url'] !== undefined ))
			loadImage(picturesArr[index]['image']['original']['url']);
		}

    	function getCategoryFromUrl() {
    		return $(location).attr('href').split('category=')[1];
    	}