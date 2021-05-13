"use strict";

let elements = Array.from(document.querySelectorAll(".has-tooltip"));

let divText = `<div class="tooltip" style="left: 0; top: 0" > Проверка! </div>`;
document.body.insertAdjacentHTML("afterEnd",divText);
let tooltip = document.querySelector(".tooltip")
tooltip.setAttribute('data-position', 'bottom');

let currentElement = {};
const clickToolTip = function(event) {
    event.preventDefault();
    let y = event.currentTarget.getBoundingClientRect().y + 25;
    let x = event.currentTarget.getBoundingClientRect().x;
    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;
    tooltip.innerText = event.currentTarget.title;
    if (currentElement === event.currentTarget) {
        tooltip.classList.remove("tooltip_active");
    }
    else tooltip.classList.add("tooltip_active");
    
    currentElement = event.currentTarget;
};

elements.forEach(item => item.addEventListener('click', clickToolTip)); 
