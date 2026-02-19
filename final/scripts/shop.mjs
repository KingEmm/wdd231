import { Get } from "./app.mjs";


let products = new Get;

products.getFeatured(true);
// console.log(await );
products.getLocation();
const featured_product = document.querySelector('.featured_product');
const search =  document.querySelector('input');
const cart_count = document.querySelector('.cart_count');
// let modal = document.querySelector('dialog');

// const featured_product = document.querySelector('.featured_product');
// const cart_count = document.querySelector('.cart_count');

featured_product.addEventListener('click', (e)=>{
    if(e.target.classList.contains('cart_btn')){
        let keo_cart = JSON.parse(localStorage.getItem('keo_cart')) || [];
        // console.dir(keo_cart);
        keo_cart.push(e.target.dataset.value);
        localStorage.setItem('keo_cart', JSON.stringify(keo_cart));
        cart_count.textContent = keo_cart.length;
        // modal.innerHTML = `<h2>Product Added Successfully</h2> <button id="close-modal">&#9776;</button>`
        // document.querySelector('main').appendChild(modal);
        // modal.showModal();
        // modal.classList.add('.dialog');
        // console.log(e.target.dataset.value)
    }
})

// document.querySelector('#close-modal').addEventListener('click', ()=>{
//     modal.close();
// })


let symbol = await products.getCurrencySymbol();

search.addEventListener('input', async(e)=>{
    // alert('hi')
    // currency = currency.currency.toUpperCase();
    // let symbol = currencySymbols[currency];
    // console.log(currency)
    // console.log(symbol)
    featured_product.innerHTML = '';
    let data = await products.getProducts();//['ji', 'kip', 'hello']
    data  = data.filter((ele)=>{
        let nam = ele.name
        // console.log(nam);
        return nam.toLowerCase().includes(e.target.value);
    })
    data.forEach((element) => {
        let product_card = document.createElement('div');
        product_card.classList.add('product_card');
        product_card.innerHTML = `<img width="100" height="100" src="${element.image}" loading="lazy" alt="product">
                <p>${element.name}</p>
                <p>${symbol}${element.price}</p>
                <button class='cart_btn' data-value='${element.id}'>Add to Cart</button>`;
        // console.log(element.id)
        featured_product.appendChild(product_card);
    })
})

let nav_links = document.querySelectorAll('header nav a');

nav_links.forEach(element => {
    element.classList.remove('link')
});
nav_links[1].classList.add('link')


const keo_cart = JSON.parse(localStorage.getItem('keo_cart')) || [];
cart_count.textContent = keo_cart.length;