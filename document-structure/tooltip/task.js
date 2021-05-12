"use strict";

let elements = Array.from(document.querySelectorAll(".has-tooltip"));

elements.forEach(item => {
    let y = item.getBoundingClientRect().y + 25;
    let x = item.getBoundingClientRect().x;
    let divText = ` <div class="tooltip" style="left: ${x}px; top: ${y}px" >${item.title}</div>`;
    item.insertAdjacentHTML("afterEnd",divText);
}); 

const clickToolTip = function(event) {
    event.preventDefault();
    let toolTips = document.querySelector(".tooltip_active");
    if (toolTips !== null) {
        toolTips.classList.remove("tooltip_active");
    };
    
    let curentToolTip = event.currentTarget.nextElementSibling;
    curentToolTip.classList.add("tooltip_active");
    curentToolTip.setAttribute('data-position', 'bottom');
   
};

elements.forEach(item => item.addEventListener('click', clickToolTip)); 