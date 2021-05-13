"use strict";

const progress = document.getElementById("progress");
let formFile = document.getElementById("form");

formFile.addEventListener("submit", (e) => {
    e.preventDefault();
    let input = e.currentTarget.elements.file;
    let fileSend = input.files[0];
    
    let request = new XMLHttpRequest();
    
    request.upload.onprogress = function(event) {
        progress.setAttribute('max', event.total);
        progress.value = event.loaded;
    };
   
    let formData = new FormData(formFile);
    formData.append("file", fileSend);
       
    request.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php", true);
    request.send(formData);
});