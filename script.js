let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("mousemove", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    console.log(content);
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

const bradMessage = document.querySelector('#chat-1');
const chadMessage = document.querySelector('#chat2');
const joseMessage = document.querySelector('#chat3');
const username = document.querySelector('#username');
const messageRecieved = document.querySelector('.message-recieved');
const messageSent = document.querySelector('.message-sent');
const welcomeMessage = document.querySelector('#welcome-messages');
const newMessage = document.querySelector('#new-message');

bradMessage.addEventListener('click', function(e) {
  console.log("test");
  username.innerHTML='Brad';
  username.style.display="block"
  messageRecieved.innerHTML="Hey I like Coffee";
  messageRecieved.style.display="block";
  messageSent.innerHTML="Hi Brad";
  messageSent.style.display="block";
  newMessage.style.display="block";
  welcomeMessage.style.display="none";
})

chadMessage.addEventListener('click', function(e) {
  console.log("chad");
  username.innerHTML='Chad';
  username.style.display="block"
  messageRecieved.innerHTML="Hi, I'm Chad"
  messageRecieved.style.display="block";
  messageSent.innerHTML="Hi Chad"
  messageSent.style.display="block";
  newMessage.style.display="block";
  welcomeMessage.style.display="none";

})

joseMessage.addEventListener('click', function(e) {
  console.log("jose");
  username.innerHTML='Jose';
  username.style.display="block"
  messageRecieved.innerHTML="Hey, I'm Jose and I like to skate"
  messageRecieved.style.display="block";
  messageSent.innerHTML="Hi Jose"
  messageSent.style.display="block";
  newMessage.style.display="block";
  welcomeMessage.style.display="none";

})

