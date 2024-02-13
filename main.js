//grabbing elements
var inpMSG = document.getElementById("inpMSG");
var btnSend = document.getElementById("btnSend");
var chat = document.getElementById("chat");
var message;
var messageBOT;

//event
btnSend.addEventListener("click", function(){
    message = document.createElement("li");
    message.innerHTML = inpMSG.value;
    chat.appendChild(message);
    inpMSG.value = "";
    //null input
    if (message.innerHTML == "") {
        message.style.display = "none";
    }
    //bot
    if (message.innerHTML == "hello" || message.innerHTML == "Hello") {
        messageBOT = document.createElement("li");
        messageBOT.innerHTML = "Hello Dear ! this is a testing project, it's created by Ali-Magic ! if you like you can follow and star his projects on github";
        messageBOT.setAttribute('class', 'bot-li');
        message.appendChild(messageBOT);
    }
})