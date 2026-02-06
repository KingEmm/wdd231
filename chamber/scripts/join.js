const time = document.querySelector('#time');

time.value = Date.now()
// alert(time.value)

let nav_links = document.querySelectorAll('header nav a');

nav_links.forEach(element => {
    element.classList.remove('link')
});

nav_links[2].classList.add('link')

let modH1 = document.querySelector('dialog h2')
let modP = document.querySelector('dialog p')

document.querySelector('section:nth-child(3) div:nth-child(2)').addEventListener('click', ()=>{
    modH1.textContent = 'Non Profit Membership Level';
    modP.textContent = 'Support local businesses and join our community-focused initiatives 💡.';
    modal.showModal();
})
document.querySelector('section:nth-child(3) div:nth-child(3)').addEventListener('click', ()=>{
    modH1.textContent = 'Bronze Membership Level';
    modP.textContent = 'Boost your business with enhanced visibility and connections 🚀.';
    modal.showModal();
})
document.querySelector('section:nth-child(3) div:nth-child(4)').addEventListener('click', ()=>{
    modH1.textContent = 'Silver Membership Level';
    modP.textContent = 'Elevate your business with premium exposure and partnerships 🔥.';
    modal.showModal();
})
document.querySelector('section:nth-child(3) div:nth-child(5)').addEventListener('click', ()=>{
    modH1.textContent = 'Gold Membership Level';
    modP.textContent = 'Maximize growth with top-tier connections and visibility 🌟.Maximize growth with top-tier connections and visibility 🌟.';
    modal.showModal();
})
const modal = document.querySelector('dialog');

const closeModal = document.querySelector('dialog button');


closeModal.addEventListener('click', () => {
    modal.close();
});


// document.querySelector('body').addEventListener('click', ()=>{
//     modal.close();
// })