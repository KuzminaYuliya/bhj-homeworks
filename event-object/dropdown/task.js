"use strict";

let elements = Array.from(document.querySelectorAll(".dropdown__link"));

let buttons =  Array.from(document.getElementsByClassName("dropdown"));
buttons.forEach(item => clickButton(item)); 

function clickButton (button) {
   
    button.addEventListener('click', function() {
        let subElements = this.querySelector(".dropdown__list");
        if (subElements.classList.contains("dropdown__list_active")) {
            subElements.className = "dropdown__list";
            return false;
        }    
        else {subElements.className = "dropdown__list dropdown__list_active";
        };
    });
}; 

for (let index = 0; index < elements.length; index ++) {
    elements[index].closest(".dropdown__item").onclick = function() {
        elements[index].closest(".dropdown").querySelector(".dropdown__value").textContent = elements[index].innerText;
        return false;
    };
};    