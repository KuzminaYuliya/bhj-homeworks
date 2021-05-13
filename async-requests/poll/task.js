"use strict";

const poll = document.querySelector(".poll");
const answers = document.getElementById("poll__answers");
const question = document.getElementById("poll__title");

let indexQuestion = 0;
let indexAnswer = 0;

const btnReloud = document.createElement("button");
const textInbtnReloud = document.createTextNode("Следующий вопрос");
btnReloud.appendChild(textInbtnReloud);
document.body.appendChild(btnReloud);
btnReloud.style.marginTop = "15px";

function loadPoll() {
    let currentAnswers = Array.from(document.querySelectorAll(".poll__answer"));
    currentAnswers.forEach(item => item.remove());
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
    xhr.send();
    xhr.addEventListener("readystatechange", function(event) {
        if (xhr.readyState === xhr.DONE) {
            let data = JSON.parse(xhr.responseText);
            indexQuestion = data.id;
            showElements(data.data);
        };    
    });
};    
loadPoll();
const clickButton = (event) => {
    window.alert(`Спасибо, ваш голос засчитан!`);
    
    let currentAnswers = Array.from(document.querySelectorAll(".poll__answer"));
    indexAnswer = currentAnswers.indexOf(event.currentTarget);
    currentAnswers.forEach(item => item.remove());
    
    const xhrVotes = new XMLHttpRequest;
    xhrVotes.open( 'POST', 'https://netology-slow-rest.herokuapp.com/poll.php' );
    xhrVotes.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
    xhrVotes.send(`vote=${indexQuestion}&answer=${indexAnswer}`);
    xhrVotes.addEventListener("readystatechange", function(event) {
        if (xhrVotes.readyState === xhrVotes.DONE) {
            let dataVotes = JSON.parse(xhrVotes.responseText).stat;
            for (let item in dataVotes) {
                let divTextVotes = `<div class="item"><div class= "item_answer">${dataVotes[item].answer}:</div><div class="item_count">${dataVotes[item].votes}%</div></div>`;
                answers.insertAdjacentHTML("beforeEnd",divTextVotes);
                
            };
            Array.from(document.querySelectorAll(".item")).forEach(item => {
                item.style.display = "flex";
            }); 
            Array.from(document.querySelectorAll(".item_count")).forEach(item => {
                item.style.fontWeight = "bold";
            });     
        };    
    });
};

function showElements(dataQuestions) {
    question.innerText = dataQuestions.title;
    for (let item in dataQuestions.answers) {
        let divText = `<button class="poll__answer">${dataQuestions.answers[item]}</button>`;
        answers.insertAdjacentHTML("beforeEnd",divText);
    };
    const btn = Array.from(document.querySelectorAll(".poll__answer"));
    btn.forEach(item => item.addEventListener('click', clickButton)); 

};

btnReloud.addEventListener('click', (event) => {
    Array.from(document.querySelectorAll(".item")).forEach(item => item.remove());
    loadPoll();
});

    