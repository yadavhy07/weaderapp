const apiKey = "ecf318d8ce8e73ae6560907cd686b8af"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&units=metric&q=";

async function weather(city) {
    const api = await fetch(apiUrl +city+ `&appid=${apiKey}`)
    const json1 = await api.json();
  
    document.querySelector("h2").innerHTML = json1.name
    document.querySelector("h1").innerHTML = Math.round(json1.main.temp) + "°C"
        
}


let searchbox = document.querySelector(".searchandbtn input")
let btn = document.querySelector(".searchandbtn button")

btn.addEventListener("click",()=>{
weather(searchbox.value);
})
