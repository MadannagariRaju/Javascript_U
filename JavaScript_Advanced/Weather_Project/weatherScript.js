// for weather api visit -> https://home.openweathermap.org/api_keys

let apiKey = "dc22a21bc7b5eef2d7a3419b7a1ac153"

async function save(event) {
    event.preventDefault()
    let cityname = document.getElementById("text1").value
    let statename = document.getElementById("text2").value
    let countryname = document.getElementById("text3").value
    let value = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname},${statename},${countryname}&appid=${apiKey}`)
    let result = await value.json()
    if(result.cod === 200){
        document.getElementById('cityName').textContent = `City Name: ${result.name}`
        document.getElementById('temperature').textContent = `Temperature : ${result.main.temp}`
        document.getElementById('Humidity').textContent = `Humidity : ${result.main.humidity}`
        document.getElementById('Pressure').textContent = `Pressure : ${result.main.pressure}`
        document.getElementById('Speed').textContent = `Speed : ${result.wind.speed}`
    }
    document.getElementById("text1").value = ""
    document.getElementById("text2").value = ""
    document.getElementById("text3").value = ""
    console.log(result)
}