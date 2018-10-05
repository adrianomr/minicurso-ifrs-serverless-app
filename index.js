var firebaseDB
var messageDB

window.onload=function(){
    firebase.initializeApp(config);
    firebaseDB = firebase.database();
    messageDB = firebaseDB.ref().child('message');
        
    messageDB.on('value', changeFunction => {
        var message = changeFunction.val();
        console.log (message)
    });
}

function sendMessage(){
    console.log('teste')
    var username = document.forms[0].uname.value
    var userImage = document.forms[0].userImage.value
    var message = document.forms[0].message.value
    
    
    firebaseDB.ref('message/' + username).set({
        username,
        userImage,
        message
    });
    console.log(username)
    console.log(userImage)
    console.log(message)
    console.log(config)
}