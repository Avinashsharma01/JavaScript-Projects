

let temp = document.querySelector(".temp")
let cityName = document.querySelector(".city")
let Humidity = document.querySelector(".Humidity")
let windspeed = document.querySelector(".windspeed")

let SearchBtn = document.querySelector(".SearchBtn")
let inputSearch = document.querySelector(".inputSearch")
let weatherIcon = document.querySelector(".weatherIcon")


let apiKey = "936c2871e4d1356a30772dbcbe38e4b6"
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=`

let units = "&units=metric"


let weather = async (city) => {
    let response = await fetch(apiUrl + city + `&appid=${apiKey}` + `${units}`)
    let data = await response.json()
    console.log(data)

    temp.innerHTML = Math.round(data.main.temp)+"°C"
    cityName.innerHTML = data.name
    Humidity.innerHTML = data.main.humidity+"%"
    windspeed.innerHTML = data.wind.speed  +" km/h"

    if(data.weather[0].main === "Clouds"){
        weatherIcon.src="./2-30-Weather/images/clouds.png"
    }
    else if(data.weather[0].main === "Clear"){
        weatherIcon.src ="./2-30-Weather/images/clear.png"
    }
    else if(data.weather[0].main === "Rain"){
        weatherIcon.src= "./2-30-Weather/images/rain.png"
    }
    else if(data.weather[0].main === "Drizzl"){
        weatherIcon.src= "./2-30-Weather/images/drizzl.png"
    }
    else if(data.weather[0].main === "Mist"){
        weatherIcon.src = "./2-30-Weather/images/mist.png"
    }

}


window.addEventListener("keydown", (key) => {
    if (key.key === "Enter") {
        weather(inputSearch.value)
    }
})


SearchBtn.addEventListener("click", () => {
    weather(inputSearch.value)
})




