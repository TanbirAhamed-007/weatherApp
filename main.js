const input = document.querySelector('#input')
const loc = document.querySelector('#Location')
const feels = document.querySelector('#feels')
const temp = document.querySelector('#temp')
const img = document.querySelector('#image')

const weatherApi = async () => {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=${input.value}&aqi=no`)
        const data = await response.json()
        console.log(data)
        loc.innerHTML = `Location: ${data.location.name}`
        temp.innerHTML = `Temp: ${data.current.temp_c}`
        feels.innerHTML = `Feels Like: ${data.current.feelslike_c}`

        if (data.current.condition.text === "Partly Cloudy") {
            img.src = "./images/cloudy.svg"
        } else if (data.current.condition.text === "Sunny") {
            img.src = "./images/cloudy-day-3.svg"
        } else if (data.current.condition.text === "Mist") {
            img.src = "./images/day.svg"
        } else if (data.current.condition.text === "Clear") {
            img.src = "./images/day.svg"
        } else if (data.current.condition.text === "Rain") {
            img.src = "./images/rainy-7.svg"
        } else if (data.current.condition.text === "Thunderstrom") {
            img.src = "./images/thunder.svg"
        } else {
            img.src = "./images/cloudy-day-2.svg"
        }
        img.style.display = "flex"


    } catch (error) {
        img.style.display = "none"
        loc.innerHTML = "Location: Not Found"
        temp.innerHTML = "Temp: 0"
        feels.innerHTML = "Feels Like: 0"
    }
}

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        weatherApi()
        input.value = ""
    }
})