import { Get, addCart } from "./app.mjs";



let products = new Get;

products.getFeatured();

const featured_product = document.querySelector('.featured_product');
const cart_count = document.querySelector('.cart_count');

featured_product.addEventListener('click', (e)=>{
    if(e.target.classList.contains('cart_btn')){
        let keo_cart = JSON.parse(localStorage.getItem('keo_cart')) || [];
        console.dir(keo_cart);
        keo_cart.push(e.target.dataset.value);
        localStorage.setItem('keo_cart', JSON.stringify(keo_cart));
        cart_count.textContent = keo_cart.length;
        // console.log(e.target.dataset.value)
    }
})

const keo_cart = JSON.parse(localStorage.getItem('keo_cart')) || [];
cart_count.textContent = keo_cart.length;

let nav_links = document.querySelectorAll('header nav a');

nav_links.forEach(element => {
    element.classList.remove('link')
});

nav_links[0].classList.add('link')


