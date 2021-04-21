"use strict";

const element = document.getElementById("cookie");
const count = document.getElementById("clicker__counter");
const v = 0;
const articleDiv = document.querySelector("div.clicker__status");
const newElement = document.createElement("div");
const newText = document.createTextNode("Скорость клика:" + v);
newElement.appendChild(newText);
articleDiv.appendChild(newElement);

let timeClick = new Date().getTime();

element.onclick = function() {
    count.textContent = +count.textContent + 1;
    if (+count.textContent % 2 !== 0) {
        element.width = 100;
        element.height = 100;
    } 
    else {
        element.width = 200;
        element.height = 200;
    }   
    newText.textContent = "Скорость клика:" + (1 / (Math.floor(new Date().getTime() - timeClick) / 1000)).toFixed(2);
    timeClick = new Date().getTime();
}