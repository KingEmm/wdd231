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


let grabData = async ()=>{
    try{
        let members = await fetch("http://127.0.0.1:5500/chamber/data/members.json")
        return await members.json()
    }// catch(error){
    //     console.log(error);
    // }
    catch(SyntaxError){
        console.log('hi')
    }
}

let hi = async function(){
    let data = await grabData();
    let ul = document.querySelector('ul');
    data.forEach(element => {
        let li = document.createElement('li');
        li.innerHTML= `<img src="${element['image']}" alt="company logo">
                        <p class="comp-name">${element['name']}</p>
                        <p>${element['address']}</p>
                        <a href="tel:${element['phone_number']}">${element['phone_number']}</a>
                        <a href="${element['website']}" target="_blank" rel="noopener noreferrer">${element['website'].slice(8, element['website'].length)}</a>
                        `
        ul.appendChild(li);
    });
}


hi();

let grid = document.getElementById('grid');
let list = document.getElementById('list');


list.addEventListener('click',()=>{
    grid.classList.remove('toggled');
    list.classList.add('toggled');
    let display = document.getElementById('display');
    display.classList.remove('gd');
    display.classList.add('li');
})

grid.addEventListener('click',()=>{
    list.classList.remove('toggled');
    grid.classList.add('toggled');
    let display = document.getElementById('display');
    display.classList.remove('li');
    display.classList.add('gd');
})


// console.log(await data);

// try {
// }
// catch(error){
//     console.log(error);
// }