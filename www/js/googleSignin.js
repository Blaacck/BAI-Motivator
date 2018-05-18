$('#google').click(

    function () {
        if (window.plugins) {
            window.plugins.googleplus.login(
                {
                    'webClientId': '1064101044778-antang1guujbeobg08ocrk7cqq01rb1s.apps.googleusercontent.com',
                    'offline': true
                },
                function (obj) {
                    if (!firebase.auth().currentUser) {
                        firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(obj.idToken)).then(function (succes) {

                        }).catch(function (error) {

                        });
                    } else {
                    }
                })
        }
    })