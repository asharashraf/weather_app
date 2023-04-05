
// api key : c8a3580f3fffc76812811b761571ec75

// SELECT ELEMENT
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

// APP DATA
const weather = {};

weather.temperature = {
    unit : "celsius"
}

// APP CONSTS AND VARS
const KELVIN =273;
// API KEY
const key = "c8a3580f3fffc76812811b761571ec75"

// CHECK IF BROWSER SUPPORTS GEOLOCATION\
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosation, showError);
}else{
    notificationElement.style.display ="block";
    notificationElement.innerHTML = "<p>Browser doesn't support Geolocation</p>";
}

// SET USER'S POSATION 

function setPosation(posation){
    let lattitude = posation.coords.lattitude;
    let longitude = posation.coords.longitude;

    getWeather(lattitude, longitude)
}

// SHOW ERROR IF THERE IS AN ISSUE WITH GEOLOCATION SERVICE

function showError(error){
    notificationElement.style.display ="block";
    notificationElement.innerHTML = `<p> ${error.message} </p>`;
}

// GET WEATHER FROM API PROVIDER

function getWeather(lattitude, longitude){
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${lattitude}&lon=${longitude}&appid=${key}`;
}