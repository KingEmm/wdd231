import {places} from './places.mjs'

console.log(places)

let main = document.querySelector('.discoveries');

places.forEach(item => {
    const section = document.createElement('section');
    section.innerHTML = ` <h2>${item.name}</h2>
            <div><img src="${item.image}" width="100" height="100" loading="lazy" alt="${item.name} image"></div>
            <p>${item.description}</p>
            <button>Learn More</button>`

    main.appendChild(section);
})

let message = document.querySelector('.message p');

let last_visit = localStorage.getItem('cham_last_visit') || false;

if (!last_visit){
    localStorage.setItem('cham_last_visit', Date.now())
    console.log("");
    message.textContent = `Welcome! Let us know if you have any questions.`
}
else{
    let dayDiff = Math.floor(parseInt(Date.now() - last_visit)/(1000 * 60 * 60 * 24));
    console.log(parseInt(dayDiff));
    if(dayDiff < 1){
        console.log("")
        message.textContent = `Back so Soon!!!`
    }
    else if(dayDiff === 1){
        // console.log();
        message.textContent = `You last visited ${dayDiff} day ago.`
    }
    else{
        message.textContent = `You last visited ${parseInt(dayDiff)} days ago.`
        console.log(``);
    }
}

let now = Date.now();
