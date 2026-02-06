const time = document.querySelector('#time');

time.value = Date.now()
// alert(time.value)

let nav_links = document.querySelectorAll('header nav a');

nav_links.forEach(element => {
    element.classList.remove('link')
});

nav_links[2].classList.add('link')