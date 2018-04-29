//Tworzenie nowego konta

$('#button').click(
    
    function createNewAccount(){    
        
        var email = $("#emailField").val();
        var password = $("#pswdField").val();
        var regex = RegExp("[0-9]");
        
        if (email == "" ){
            alert("Uzupełnij pola");
        }
        
        if(password.length<7 || !regex.test(password)){
            alert("Hasło musi zawierać conajmniej 8 znaków, w tym 1 cyfrę");
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