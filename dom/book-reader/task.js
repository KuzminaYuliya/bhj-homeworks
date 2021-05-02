"use strict";

let changeFont = Array.from(document.querySelectorAll(".font-size"));

let changeColor = Array.from(document.querySelector(".book__control_color").getElementsByTagName("a"));
let changeBackground = Array.from(document.querySelector(".book__control_background").getElementsByTagName("a"));
let content = document.querySelector(".book");

const clickFont = (event) => {

    changeFont.forEach(item => item.classList.remove("font-size_active")); 
    event.currentTarget.classList.add("font-size_active");
    event.preventDefault();
    
    content.className = content.className.replace(/\bbook_fs-.*?\b/g, ''); //  удаляем из списка классов все, что начинается на book_fs-

    let currentFont = event.currentTarget.dataset.size;

    if (currentFont !== undefined) {
        content.classList.add(`book_fs-${currentFont}`);
    };
}; 

const clickColor = (event) => {

    changeFont.forEach(item => item.classList.remove("color_active")); 
    event.currentTarget.classList.add("color_active");
    event.preventDefault();
    
    content.className = content.className.replace(/\bbook_color-.*?\b/g, ''); //  удаляем из списка классов все, что начинается на book_color-

    let currentTextColor = event.currentTarget.dataset.textColor;

    if (currentTextColor !== undefined) {
        content.classList.add(`book_color-${currentTextColor}`);
    };
}; 

const clickBackground = (event) => {

    changeFont.forEach(item => item.classList.remove("color_active")); 
    event.currentTarget.classList.add("color_active");
    event.preventDefault();
    
    content.className = content.className.replace(/\bbook_bg-.*?\b/g, ''); //  удаляем из списка классов все, что начинается на book_bg-

    let currentBackgroundColor = event.currentTarget.dataset.bgColor;

    if (currentBackgroundColor !== undefined) {
        content.classList.add(`book_bg-${currentBackgroundColor}`);
    };
}; 


changeFont.forEach(item => item.addEventListener('click', clickFont)); 

changeColor.forEach(item => item.addEventListener('click', clickColor)); 

changeBackground.forEach(item => item.addEventListener('click', clickBackground)); 