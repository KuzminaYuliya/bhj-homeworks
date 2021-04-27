"use strict";

let arrowsNext = document.querySelector(".slider__arrow_next");
let arrowsPrev = document.querySelector(".slider__arrow_prev");

let slides = Array.from(document.getElementsByClassName("slider__item"));
let lengthSlides = slides.length;

let slideDot = Array.from(document.getElementsByClassName("slider__dot"));
let lengthDots = slideDot.length;


let numberSlide = 0;
slideDot[0].className = "slider__dot slider__dot_active";  // чтоб точка была  изначально

function clickSlide(n) {
    let curentSlideIndex = slides.findIndex(itemSlide => (itemSlide.className == "slider__item slider__item_active"));
    let curentDoteIndex = slideDot.findIndex(item => (item.className == "slider__dot slider__dot_active"));
    
    slides[curentSlideIndex].className = "slider__item";
    slideDot[curentDoteIndex].className = "slider__dot";
    
    numberSlide = (n + lengthSlides) % lengthSlides;

    slides[numberSlide].className = "slider__item slider__item_active";
    slideDot[numberSlide].className = "slider__dot slider__dot_active";
};

arrowsNext.onclick = function() {
    clickSlide(numberSlide + 1);
}; 

arrowsPrev.onclick = function() {
    clickSlide(numberSlide - 1);
}; 

for (let index = 0; index < lengthDots; index++) {
        slideDot[index].onclick = function() {
            numberSlide = index;
            clickSlide(numberSlide);
    };
};