



/*

/*var request = jQuery.ajax(
        {
        method: 'POST',
        url: "https://api.pinterest.com/v1/oauth/token?grant_type=authorization_code&client_id=4965843199164690504&client_secret=3bc5b6c353ca96b1736b2db900cbaa88a5767a26f9327f2e4d7eeb6bdc9af91f&code=bd9eae0d71d4d5c1", 
        dataType: 'json',
        async: false,
        success: alert('Done')

    	}) ;
    	
function imageLoad(theUrl)
		{
		    if (window.XMLHttpRequest)
		    {// code for IE7+, Firefox, Chrome, Opera, Safari
		        xmlhttp=new XMLHttpRequest();
		    }
		    else
		    {// code for IE6, IE5
		        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		    }
		    xmlhttp.onreadystatechange=function()
		    {
		        if (xmlhttp.readyState==4 && xmlhttp.status==200)
		        {
		            console.log(xmlhttp.responseText);
		        }
		    }
		    xmlhttp.open("GET", theUrl, false );
		    xmlhttp.send();    
		}
		$.ajax({
		   url:'https://pl.pinterest.com/categories/travel/',
		   success: function(result) {
		    alert(result);
		   } // <-- add this
		});

		
*/