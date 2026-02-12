import {places} from './places.mjs'

console.log(places)

let main = document.querySelector('main');

places.forEach(item => {
    const section = document.createElement('section');
    section.innerHTML = ` <h2>${item.name}</h2>
            <img src="${item.image}" width="100" height="100" loading="lazy" alt="">
            <p>${item.description}</p>
            <button>Learn More</button>`

    main.appendChild(section);
})