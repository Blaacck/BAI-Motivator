// wylogowanie
$("#logout").click(function() {
  firebase.auth().signOut().then(function() {
  // wylogowano pomyślnie
      
  alert("Wylogowano");
  window.location.replace("index.html");
}).catch(function(error) {
  // error
});
});
