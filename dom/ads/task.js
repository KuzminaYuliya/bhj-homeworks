"use strict";

let rotator = Array.from(document.querySelectorAll(".rotator"));

for (let i = 0; i < rotator.length; i++) {

    let divRotator = Array.from(rotator[i].querySelectorAll(".rotator__case"));
    let currentPosition = 0;
    let currentSpeed = 1000;

    const changeTimer = function () {
    
        divRotator[currentPosition].classList.toggle("rotator__case_active");
        currentPosition++;
        
        if (currentPosition > divRotator.length - 1) {
            currentPosition = 0;      
        };    
        
        let currentSpeed = divRotator[currentPosition].dataset.speed;
        let currentColor = divRotator[currentPosition].dataset.color;

        divRotator[currentPosition].style.color = currentColor;
        
        divRotator[currentPosition].classList.add("rotator__case_active");
        
        timer = setTimeout(changeTimer,currentSpeed);  
        clearTimeout(timer);
    }; 

    const timer = setTimeout(changeTimer,currentSpeed);   
};
