//Tworzenie nowego konta

$('#button').click(
    
    function createNewAccount(){    
        
        var email = $("#emailField").val();
        var password = $("#pswdField").val();
        var regex = RegExp("[0-9]");
        
        if (email == "" ){

            alert("Podaj swój adres email");
        }
        
        if(password.length<8 || !regex.test(password)){
            alert("Twoje hasło powinno składać się z minimum 8 znaków, w tym minimum 1 cyfry");

        } else {
            firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error){
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage)
                
                if(errorCode == "auth/weak-password"){

                    alert("Twoje hasło jest za słabe");

                }
            });
            
            $(function(){
                $("#emailField").val("");
                $("#pswdField").val("");
                

            alert("Konto zostało utworzone!");
        });
        };
    });
