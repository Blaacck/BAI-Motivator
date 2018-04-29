//Sprawdzenie statusu użytkownika
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {

    let user = firebase.auth().currentUser;
    window.location.replace("./mainpanel.html");
  } else {
    //użytkownik nie jest zalogowany/zarejestrowany
  }
});
