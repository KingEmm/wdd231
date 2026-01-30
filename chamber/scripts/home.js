// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}



let url = "https://api.openweathermap.org/data/2.5/forecast?lat=6.045157&lon=7.759348&units=metric&appid=0a2d342572fc7a9b609e7bd50e04c020";

const ur = "https://api.openweathermap.org/data/2.5/weather?lat=6.045157&lon=7.759348&units=metric&appid=0a2d342572fc7a9b609e7bd50e04c020";
// let url = "https://api.openweathermap.org/data/3.0/onecall?lat=6.045157&lon=7.759348&exclude=daily&appid=bc656394c1dcb7bc91e79c5ccafc5812"


let current_weather = document.querySelector('.c_temp');
const weather_forecast = document.querySelector('.w_for');

const getDay = (day) => {
    // const daynun = new Date(day).getDay()
    switch(day){
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        case 0:
            return 'Sunday';
        default:
            return "Invalid day of week";
    }
}

let getData = async(url) => {
    try{
        let response = await fetch(url);
        if(!response.ok){
            console.log("Invalid Url or Bad Response")
            console.log(response.status)
        }

        let data = await response.json();
        
        // console.log(data);
        return data
        }
    catch(error){
        console.log(error)
        }
    
}


const appendBusiness = async ()=>{
    const data = await getData("https://kingemm.github.io/wdd231/chamber/data/members.json");
    // const data = await getData("http://127.0.0.1:5500/chamber/data/members.json");
    let datas = await data.filter(element =>{
        return element.membership_level === "gold" | element.membership_level === "silver";
    });
    // console.log(datas);
    const randThree = datas.sort(()=> .5 - Math.random()).slice(0, 3)
    console.log(randThree);
    const business = document.querySelector('.business');
    business.innerHTML = ``
    randThree.forEach(element => {
        let sect = document.createElement('section');
        sect.innerHTML = `
                <div class="business_name">
                    <h2>${element['name']}</h2>
                    <p>${element['address']}</p>
                </div>
                <div>
                    <img loading="lazy" src="${element['image']}" alt="business logo">
                </div>
                <div class="biz_info">
                    <span><strong>Email</strong> : info.${element['website'].split('/')[2]}</span>
                    <span><strong>Phone</strong> : ${element['phone_number']}</span>
                    <span><strong>URL</strong> : ${element['website'].slice(8, element['website'].length)}</span>
                    <span><strong>Level</strong> : ${element['membership_level']}</span>
                </div>
                `
                business.appendChild(sect)
            });
        }
        
let appendWeatherData = async ()=>{
    const data = await getData(ur)
    current_weather.innerHTML = '';
    current_weather.innerHTML = `
    <strong>${data['main']['temp']}</strong>
    <span>broken clouds</span>
                                <span>High: ${data['main']['temp_max']} °C</span>
                                <span>Low: ${data['main']['temp_min']} °C</span>
                                <span>Humidity: ${data['main']['humidity']}%</span>
                                <span>Sunrise: ${new Date(data['sys']['sunrise']).toLocaleTimeString()}</span>
                                <span>Sunset: ${new Date(data['sys']['sunset']).toLocaleTimeString()}</span>
                                `                            
}

const appendForecastData = async () => {
    try{    
        let data = await getData(url);


        weather_forecast.innerHTML = '';
        weather_forecast.innerHTML = `
                                    <span>Today: ${data['list'][0]['main']['temp']}°C</span>
                                    <span>${getDay(new Date(data['list'][8]['dt_txt']).getUTCDay())}: ${data['list'][8]['main']['temp']}°C</span>
                                    <span>${getDay(new Date(data['list'][16]['dt_txt']).getUTCDay())}: ${data['list'][16]['main']['temp']}°C</span>
                                `
    }
    catch(error){
        console.log(error)
    }
    
}


appendWeatherData();
appendForecastData();

appendBusiness()

let nav_links = document.querySelectorAll('header nav a');

nav_links.forEach(element => {
    element.classList.remove('link')
});

nav_links[0].classList.add('link')