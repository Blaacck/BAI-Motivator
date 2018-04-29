//logowanie przy użyciu maila i hasła

$('#signin').click(

  function(){

    let email = $("#emailField").val();
    let password = $("#pswdField").val();

    if (email == "" || password == ""){
      alert("Podaj swoje dane logowania");
    } else {
      firebase.auth().signInWithEmailAndPassword(email, password).then(function(user) {
        alert("Zalogowano");
      }).catch(function(error) {
        let errorCode = error.code;
        let errorMessage = error.message;

        alert(errorMessage);
      });
    }
  });
