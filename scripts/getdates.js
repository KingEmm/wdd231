document.getElementById('lastModified').innerHTML = document.lastModified;
document.getElementById('currentyear').innerHTML = new Date().getFullYear();

let path = window.location.pathname;

path = path.slice(1, path.length-5)

let navLinks = document.querySelectorAll('nav a');

navLinks.forEach(ele => {
    ele.classList.add('navLink')
        if (path === "index"){
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


