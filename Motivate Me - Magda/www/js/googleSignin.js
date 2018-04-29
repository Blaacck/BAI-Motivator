// logowanie przy użyciu konta Google

$('#googleSignin').click(
        
function() {
      if (!firebase.auth().currentUser) {
        var provider = new firebase.auth.GoogleAuthProvider();
      
        firebase.auth().signInWithRedirect(provider);
        
      } else {
       
        firebase.auth().signOut();
        
      }
 
    });