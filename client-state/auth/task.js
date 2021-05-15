"use strict";

let message = document.getElementById("signin__form");
let divWelcome = document.querySelector(".welcome");
let divControl = document.querySelectorAll(".control");

const btnClean = document.createElement("button");
const textbtnClean = document.createTextNode("Деавторизация");
btnClean.appendChild(textbtnClean);
document.body.appendChild(btnClean);
btnClean.style.marginTop = "15px";

function getData() {
    try {
        return JSON.parse(localStorage.getItem('userWelcome')); 
    } catch (e) {
        return null;
    }
};
  
function setData(element) {
    localStorage.setItem('userWelcome', JSON.stringify(element));
    return false;
};

window.onload = function() {
    let getUser = getData();
    if (getUser) {
        document.getElementById("user_id").textContent = getUser;
        divWelcome.classList.add("welcome_active");
        btnClean.style.display = ""; 
    } 
    else {
        message.closest(".signin").classList.add("signin_active");
        btnClean.style.display = "none"; 
    };
};

message.addEventListener('submit', (e) => {
   
    let formData = new FormData(message);
    let request = new XMLHttpRequest();
    request.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    request.addEventListener('readystatechange', function() {
        if (this.readyState == request.DONE && this.status == 200) {
            let data =JSON.parse(this.responseText);
            if (data.success === true) {
                document.getElementById("user_id").textContent = data.user_id;
                divWelcome.classList.add("welcome_active");
                message.closest(".signin").classList.remove("signin_active"); 
                setData(data.user_id);
                btnClean.style.display = ""; 
            }    
            else window.alert(`Неверный логин/пароль`);
        };
    });
    request.send(formData);
    e.preventDefault();
    divControl.forEach(item => item.value ="");
});

btnClean.addEventListener('click', (event) => {
    divWelcome.classList.remove("welcome_active");
    message.closest(".signin").classList.add("signin_active");
    localStorage.removeItem('userWelcome');
    btnClean.style.display = "none";  
});


