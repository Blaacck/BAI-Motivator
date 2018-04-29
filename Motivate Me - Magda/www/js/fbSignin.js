// logowanie przy użyciu konta na facebook'u

$('#fbSignin').click(
    
    function() {
      if (!firebase.auth().currentUser) {
        var provider = new firebase.auth.FacebookAuthProvider();
       
        firebase.auth().signInWithRedirect(provider);
      
      } else {
       
        firebase.auth().signOut();
     
      }
        
   }
    
)