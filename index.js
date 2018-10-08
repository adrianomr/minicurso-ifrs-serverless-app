var firebaseDB
var messageDB

window.onload=function(){
    firebase.initializeApp(config);
    firebaseDB = firebase.database();
    messageDB = firebaseDB.ref().child('message');
    var divMessage = document.getElementById('message-container');
    divMessage.innerHTML = ''
    messageDB.on('value', changeFunction => {
        var messages = changeFunction.val();
        for(messageId in messages){
            var message = messages[messageId];
            var divMessageText = '<div class="message">'
            +'<img src="'+message.userImage+'"'
            +'    alt="Avatar" style="width:100%;">'
            +'<h3>'+message.username+'</h3>'
            +'<p>'+message.message+'</p>'
            +'<span class="time-right">'+message.date+'</span>'
            +'</div>'
            divMessage.innerHTML = divMessageText+divMessage.innerHTML;
        }
        console.log (message)
    });
}

function sendMessage(){
    console.log('teste')
    var username = document.forms[0].uname.value
    var userImage = document.forms[0].userImage.value
    var message = document.forms[0].message.value
    var date = (new Date()).toString()
    debugger
    firebaseDB.ref('message/').push({
        username,
        userImage,
        message,
        date: date 
    });
    console.log(username)
    console.log(userImage)
    console.log(message)
    console.log(config)
}