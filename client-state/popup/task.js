"use strict";

const closeModal = document.querySelector(".modal__close");
const modalContent = document.getElementById("subscribe-modal");

modalContent.classList.add("modal_active");

function getCookie(name) {
    let parts = document.cookie.split('; ');
    let cookie = parts.find((item) => item.startsWith(name+'='));
    return cookie ? cookie.substr((name + '=').length) : null;
};

let reloaded  = function(){
    if (getCookie('status') === 'true') {
        modalContent.classList.remove("modal_active");
    };
}; 

window.onload = function() {
    let loaded = sessionStorage.getItem('loaded');
    if(loaded) {
        reloaded();
    } 
    else {
        sessionStorage.setItem('loaded', true);
        document.cookie = 'status=; expires=Mon, 05 Jul 1982 16:37:55 GMT; ';
    };
};

const clickClose = function(event) {
    modalContent.classList.remove("modal_active");
    document.cookie = 'status=true';
};

closeModal.addEventListener('click', clickClose); 
