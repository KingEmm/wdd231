const keo_cart = JSON.parse(localStorage.getItem('keo_cart')) || [];

const cart_count = document.querySelector('.cart_count');

cart_count.textContent = keo_cart.length;

let nav_links = document.querySelectorAll('header nav a');

nav_links.forEach(element => {
    element.classList.remove('link')
});
nav_links[2].classList.add('link')