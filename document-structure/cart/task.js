"use strict";

const carts = Array.from(document.querySelectorAll(".product")); 
const cartProducts = document.querySelector(".cart__products"); 
const cartMinus = Array.from(document.querySelectorAll(".product__quantity-control_dec"));
const cartPlus = Array.from(document.querySelectorAll(".product__quantity-control_inc"));
const cartAdd = Array.from(document.querySelectorAll(".product__add"));

function getCart() {
    return JSON.parse(localStorage.getItem('cart'));
};
  
function setCart(element) {
    localStorage.setItem('cart', JSON.stringify(element));
    return false;
};

const clickPlus = (event) => {
    let element = event.currentTarget.closest(".product").querySelector(".product__quantity-value");
    element.innerText = + element.innerText + 1; 
    return false;
};

const clickMinus = (event) => {
    let element = event.currentTarget.closest(".product").querySelector(".product__quantity-value");
    if (+element.innerText > 0) {
        element.innerText = + element.innerText - 1; 
        return false;
    };
};

function drawCarts() {
  Array.from(document.querySelectorAll(".cart__product")).forEach(item => item.remove());
  let cartData = getCart();
  if (cartData !== null) {
    
      for (let item in cartData) {
    
          let currentId = item;
          let currentSrc = cartData[item][1];
          let currentCount = cartData[item][2];

          let divText = `<div class="cart__product" data-id = ${currentId}><img class="cart__product-image" src=${currentSrc}><div class="cart__product-count">${currentCount}</div></div>`;
          cartProducts.insertAdjacentHTML("beforeEnd",divText); 
      };
  };      
return false;
};
  
const clickAdd = (event) => {
    let parentElement = event.currentTarget.closest(".product");
    let count = +parentElement.querySelector(".product__quantity-value").innerText;
    if (+count >= 1) {
      let id = parentElement.dataset.id; 
      let title = parentElement.querySelector(".product__title").innerText; 
      let image = parentElement.querySelector(".product__image").src; 
      let cartData = getCart() || {}; 
        
        if (cartData.hasOwnProperty(id)) { 
          cartData[id][2] = parseInt(cartData[id][2]) + count;
        } 
        else { 
          cartData[id] = [title, image, count];
        }
     
      localStorage.removeItem('cart');
      setCart(cartData); 
      drawCarts();
      
    };
    return false;
};

cartAdd.forEach(item => item.addEventListener('click', clickAdd));
cartMinus.forEach(item => item.addEventListener('click', clickMinus));
cartPlus.forEach(item => item.addEventListener('click', clickPlus));

document.getElementById('clear_cart').addEventListener('click', function(event) {
    localStorage.removeItem('cart');
    drawCarts();
});

drawCarts();