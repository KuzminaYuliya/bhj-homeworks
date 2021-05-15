"use strict";

const editor = document.getElementById('editor');

const btnClean = document.createElement("button");
const textbtnClean = document.createTextNode("Очистить содержимое");
btnClean.appendChild(textbtnClean);
document.body.appendChild(btnClean);

function getData() {
    try {
        return JSON.parse(localStorage.getItem('data')); 
    } catch (e) {
        return null;
    }
};
  
function setData(element) {
    localStorage.setItem('data', JSON.stringify(element));
    return false;
};

let data = getData();
    if (data !== null) {
        editor.value = data;
    };  

editor.addEventListener('input', (event) => {
    if (editor.value.trim() !== "" ) {
        setData(editor.value);
    };
});

btnClean.addEventListener('click', (event) => {
    editor.value = "";
    localStorage.removeItem('data');
});

