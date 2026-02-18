console.log("Hi there")
let header = document.querySelector('header')
let nav_btn = document.getElementById('nav-btn');
let open = false
nav_btn.addEventListener('click',()=>{
    if (!open){
        open=true;
        nav_btn.innerHTML = '&#215;';
    }else{
        open=false;
        nav_btn.innerHTML = '&#9776;';
    }
    document.querySelector('header nav').classList.toggle('show')
    document.querySelector('header nav').style.top = `${header.offsetHeight}px`
})



document.getElementById('lastModified').innerHTML = document.lastModified;
document.getElementById('currentyear').innerHTML = new Date().getFullYear();

let path = window.location.pathname;

path = path.slice(1, path.length-5)

let navLinks = document.querySelectorAll('nav a');
console.log(path)
navLinks.forEach(ele => {
    ele.classList.add('navLink')
        if (path.includes("index") | path === 'wd'){
            navLinks[0].style.background = 'var(--grey)';
        }
        else if (window.location.pathname.includes(ele.textContent.split(' ')[0])){
            ele.style.background = 'var(--grey)';
        }
        else{
            // ele.style.background = 'none'
        }
    }
)

// https://github.com/beandog/lds-scriptures/archive/2020.12.08.zip

// https://github.com/beandog/lds-scriptures