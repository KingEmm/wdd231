import { Get } from "./app.mjs";


const keo_cart = JSON.parse(localStorage.getItem('keo_cart')) || [];

// let itemsList = document.querySelector('ol');
let modal = document.querySelector('dialog');

let ol = document.querySelector('.cart_item ol');
ol.innerHTML = '';

ol.addEventListener('click', (e)=>{
    if(e.target.matches('a')){
        modal.showModal();
    }
})

document.querySelector('#close-modal').addEventListener('click', ()=>{
    modal.close();
})

let products = new Get;

let symbol = await products.getCurrencySymbol();

// keo_cart = []

if(keo_cart.length === 0){
    let main = document.querySelector('main');
    h2 = document.createElement('h2');
    h2.innerHTML = `You do not have any item added to <a href='./shop'>Cart</a>`
}

keo_cart.forEach(async(element) => {
    let data =  await products.getProducts();
    data = data.filter(ele=>{
        return parseInt(element) === ele.id;
    })
    console.log(data);
    data.forEach(ele=>{
        let li = document.createElement('li');
        let store = ()=>{
            if(ele.id < 6){
                return 'Nova Store'
            }
            else if(ele.id > 5 && ele.id <= 10){
                return 'Silver Store'
            }
            else if(ele.id > 10 && ele.id <= 15){
                return 'Urban Gear'
            }
            else if(ele.id > 5 && ele.id <= 20){
                return 'Tech Haven'
            }
            else{
                return 'invalid index!!!' 
            }
        }
        li.innerHTML = `<div class="img">
                            <img src="${ele.image}" loading="lazy" alt="your product" width="150" height="150">
                        </div>
                        <div class="contents">
                            <p>${ele.name}</p>
                            <strong>${symbol} ${ele.price}</strong>
                            <a href="#">Coupon eligible</a>
                            <span>${store()}</span>
                        </div>`
        ol.appendChild(li);
    })
})

const cart = document.querySelector('.cart_item');


let nav_links = document.querySelectorAll('header nav a');

nav_links.forEach(element => {
    element.classList.remove('link')
});
nav_links[3].classList.add('link')

const cart_count = document.querySelector('.cart_count');

cart_count.textContent = keo_cart.length;