"use strict";

let chat = document.querySelector(".chat-widget__side");
let chatWidjet = document.querySelector(".chat-widget");

let chatWidjetInput = document.getElementById("chat-widget__input");

const messages = document.querySelector( '.chat-widget__messages' );

let count = 0;

chat.addEventListener('click', e => {
    chatWidjet.classList.add("chat-widget_active");
});

function getWord() {
  const words = [
    'Добрый день',
    'Добрый вечер',
    'Чем могу помочь?',
  ],
  index = Math.floor(Math.random() * words.length);
  return words[index];
};


chatWidjetInput.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {  
        const curentDate = new Date();
        const curentText = chatWidjetInput.value;
        messages.innerHTML += `
          <div class = "message message_client">
          <div class = "message__time">${curentDate.getHours() + ":" + curentDate.getMinutes()}</div>
            <div class = "message__text">
                ${curentText}
            </div>
          </div>
          `;
          chatWidjetInput.value = ""; 
                    
          messages.innerHTML += `
          <div class = "message">
          <div class = "message__time">${curentDate.getHours() + ":" + curentDate.getMinutes()}</div>
            <div class = "message__text">
                ${getWord()}
            </div>
          </div>
          `;
          const message =  Array.from(document.querySelectorAll(".message__text"));
          message[message.length-1].scrollIntoView();
    }      
});

setInterval(function() {
    
  if (chatWidjet.classList.contains("chat-widget_active") && (count == messages.childElementCount)) {
    const curentDate = new Date();
    messages.innerHTML += `
    <div class = "message">
    <div class = "message__time">${curentDate.getHours() + ":" + curentDate.getMinutes()}</div>
      <div class = "message__text">
        Чем могу помочь?
      </div>
    </div>
    `;
  };
     count = messages.childElementCount;
}, 30000);