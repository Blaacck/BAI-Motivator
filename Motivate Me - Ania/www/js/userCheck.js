firebase.auth().onAuthStateChanged(function (user) {
  if (user) {

    let user = firebase.auth().currentUser;
    window.location.replace("./main-page.html");
  } else {
    window.location.replace("./index.html");
  }
});
