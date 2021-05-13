"use strict";

const loader = document.getElementById("loader");
const div = document.getElementById("items");

const btn = document.createElement("button");
const textInBtn = document.createTextNode("Обновить курс валют");
btn.appendChild(textInBtn);
document.body.appendChild(btn);

function getValute() {
    return JSON.parse(localStorage.getItem('valute'));
};
  
function setValute(element) {
    localStorage.setItem('valute', JSON.stringify(element));
    return false;
};

loader.classList.remove("loader_active");
let currentData = getValute();
    if (currentData !== null) {
        showElements(currentData);
    };

const loadValutes = (event) => {
    Array.from(div.querySelectorAll(".item")).forEach(item => item.remove());
    loader.classList.add("loader_active");
    
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://netology-slow-rest.herokuapp.com");
    xhr.send();
    xhr.addEventListener("readystatechange", function(event) {
        if (xhr.readyState === xhr.DONE) {
            loader.classList.remove("loader_active");
            let data = JSON.parse(xhr.responseText).response.Valute;
            showElements(data);
            
            localStorage.removeItem('valute');
            setValute(data);
        };    
    });
};    

function showElements(data) {
    for (let item in data) {
        let divText = `<div class="item"><div class="item__code">${data[item].CharCode}</div><div class="item__value">${data[item].Value}</div><div class="item__currency"> руб.</div></div>`;
        div.insertAdjacentHTML("beforeEnd",divText); 
    };
};

btn.addEventListener('click', loadValutes);