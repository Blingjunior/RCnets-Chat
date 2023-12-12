var chatbox = document.getElementById("chatbox");
var messages = [];

function sendMessage() {
  var message = document.getElementById("message").value;
  messages.push(message);
  chatbox.innerHTML += "<p>" + message + "</p>";
  document.getElementById("message").value = "";
}

document.getElementById("send").addEventListener("click", sendMessage);

function loadMessages() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "/messages");
  xhr.onload = function() {
    if (xhr.status == 200) {
      var data = JSON.parse(xhr.responseText);
      messages = data.messages;
      for (var i = 0; i < messages.length; i++) {
        chatbox.innerHTML += "<p>" + messages[i] + "</p>";
      }
    }
  };
  xhr.send();
}

window.onload = loadMessages;
 