"use strict";

let tabs = Array.from(document.querySelectorAll(".tab"));
let content = Array.from(document.querySelectorAll(".tab__content"));

let currentIndex = 0;
const clickTab = (event) => {

    tabs.forEach(item => item.className = "tab"); 
    event.currentTarget.className = "tab tab_active";

    currentIndex = tabs.indexOf(event.currentTarget);

    content.forEach(item => item.className = "tab__content"); 
    content[currentIndex].className = "tab__content tab__content_active";
}    

tabs.forEach(item => item.addEventListener('click', clickTab)); 


