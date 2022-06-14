var input = document.querySelector(".weather__input")
var city = document.querySelector(".weather__city")
var country = document.querySelector(".weather__country")
var temperate = document.querySelector(".weather__number-temparate")
var weather = document.querySelector(".weather__heading")
var visibility = document.querySelector(".weahter__number-visibility")
var windSpeed = document.querySelector(".weather__number-wind")
var humidity = document.querySelector(".weather__number-humidity")
var time = document.querySelector(".weather__date")
var content = document.querySelector(".weather__content")
async function changeWeatherUI() {
    let address = input.value.trim() || 'hanoi'
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${address}&appid=f3855e964af12fd24ce90fd3030e2774`

    let data = await fetch(api).then(res => res.json())
    if (data.cod == 200) {
        content.classList.remove("hide")
        city.textContent = data.name
        country.textContent = data.sys.country
        let temp = Math.round(data.main.temp - 273.15)
        temperate.textContent = temp
        weather.textContent = data.weather[0].main
        visibility.textContent = data.visibility
        windSpeed.textContent = data.wind.speed
        humidity.textContent = data.main.humidity
        time.textContent = new Date().toLocaleString("vi")
        if (temp <= 21) {
            document.body.className = ''
            document.body.classList.add('cold')
        } else if (temp <= 28) {
            document.body.className = ''
            document.body.classList.add('cool')
        } else if (temp <= 32) {
            document.body.className = ''
            document.body.classList.add('warm')
        } else {
            document.body.className = ''
            document.body.classList.add('hot')
        }
    } else {
        content.classList.add("hide")
    }

}

changeWeatherUI()

input.addEventListener('change', changeWeatherUI)