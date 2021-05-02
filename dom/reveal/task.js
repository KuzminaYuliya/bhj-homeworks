"use strict";

let divReveal = Array.from(document.querySelectorAll(".reveal"));
const viewportHeight = window.innerHeight;

const isInViewport = function(element) {
    const elementTop = element.getBoundingClientRect().top;
    if ((elementTop < viewportHeight) && (elementTop > 0)) {
        element.classList.add("reveal_active");
    }
    else  element.classList.remove("reveal_active");
};

window.onscroll = function() {
    divReveal.forEach(item => isInViewport(item));
}
  

