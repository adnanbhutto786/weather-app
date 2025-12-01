const apiKey = "4e80f18d9a9c57878f4b9ca0ac21656a";

const iconMap ={
   Clear: "☀️",
   Clouds: "☁️",
   Rain: "🌧️",
   Drizzle: "🌦️",
   Thunderstorm: "⛈️",
   Snow: "❄️",
   Mist: "🌫️",
   Smoke: "🌫️",
   Haze: "🌫️",
   Dust: "🌫️",
   Fog: "🌫️",
   Sand: "🌫️",
   Ash: "🌫️",
   Squall: "🌫️",
   Tornado : "🌪️"

};

async function getWeather (){
   const city = document.getElementById("cityInput").value.trim();
   const weatherInfo = document.getElementById("weatherInfo");
   
   //Valid Input
   if ( city === ""){
      weatherInfo.innerHTML = "<p>Please enter a city name 🌆</p>"
      return;
   }
   // Show loading
   weatherInfo.innerHTML = "<p>Loading Weather......... ⌛ </p>";

   try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

      // fetch data
      const res = await fetch(url)
//  handle  200 responses ( city not found)
  if (!res.ok){
   if ( res.status === 404){
      weatherInfo.innerHTML = `<p>City not found: <b>${city}</b> ❌</p>`
   } else {
      weatherInfo.innerHTML = `<p>Something went wrong (${res.status}). Try again later.</p>`
   }
   return;
  }

   const data = await res.json();
   const cityName = data.name;
   const country = data.sys?.country || "";
   const temp = Math.round(data.main.temp);
   const humidity = data.main.humidity;
   const wind = data.wind?.speed ?? 0;
   const conditionMain = data.weather?.[0]?.main || "Unknown";
   const conditionDesc = data.weather?.[0]?.description || "";

   // pick icon based condition

   const icon = iconMap[conditionMain]  || "🌤️";

   // update dom with styled condition

   weatherInfo.innerHTML = `
   <h2>${icon} ${cityName} , ${country}</h2>
   <p><Strong>Temperature:</strong> ${temp} °C</p>
   <p><Strong>Humidity:</strong> ${humidity} %</p>
   <p><Strong>Wind:</strong>${wind} m/s</p>
   <p><Strong>Condition:</strong> ${conditionMain} (${conditionDesc})</p>
 
   `;
   document.getElementById("cityInput").value = "";

   } catch (error){
      // network aur parsing error
      console.error(error);
      weatherInfo.innerHTML = "<p>Network error. Please check your connection and try again 📶</p>"
   }

}




















































// const apiKey = "4e80f18d9a9c57878f4b9ca0ac21656a";

// const iconMap = {
//   Clear: "☀️",
//   Clouds: "☁️",
//   Rain: "🌧️",
//   Drizzle: "🌦️",
//   Thunderstorm: "⛈️",
//   Snow: "❄️",
//   Mist: "🌫️",
//   Smoke: "🌫️",
//   Haze: "🌫️",
//   Dust: "🌫️",
//   Fog: "🌫️",
//   Sand: "🌫️",
//   Ash: "🌫️",
//   Squall: "🌫️",   // fixed capital S
//   Tornado: "🌪️"
// };

// async function getWeather() {
//   const city = document.getElementById("cityInput").value.trim();
//   const weatherInfo = document.getElementById("weatherInfo");

//   if (city === "") {
//     weatherInfo.innerHTML = "<p>Please enter a city name 🌆</p>";
//     return;
//   }

//   weatherInfo.innerHTML = "<p>Loading Weather......... ⌛ </p>";

//   try {
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
//       city
//     )}&appid=${apiKey}&units=metric`;

//     const res = await fetch(url);

//     if (!res.ok) {
//       if (res.status === 404) {
//         weatherInfo.innerHTML = `<p>City not found: <b>${city}</b> ❌</p>`;
//       } else {
//         weatherInfo.innerHTML = `<p>Something went wrong (${res.status}). Try again later.</p>`;
//       }
//       return;
//     }

//     const data = await res.json();
//     const cityName = data.name;
//     const country = data.sys?.country || "";
//     const temp = Math.round(data.main.temp);
//     const humidity = data.main.humidity;
//     const wind = data.wind?.speed ?? 0;
//     const conditionMain = data.weather?.[0]?.main || "Unknown";
//     const conditionDesc = data.weather?.[0]?.description || ""; // fixed

//     const icon = iconMap[conditionMain] || "🌤️";

//     weatherInfo.innerHTML = `
//       <h2>${icon} ${cityName}, ${country}</h2>
//       <p><strong>Temperature:</strong> ${temp} °C</p>
//       <p><strong>Humidity:</strong> ${humidity} %</p>
//       <p><strong>Wind:</strong> ${wind} m/s</p>
//       <p><strong>Condition:</strong> ${conditionMain} (${conditionDesc})</p>
//     `;

//     document.getElementById("cityInput").value = "";
//   } catch (error) {
//     console.error(error);
//     weatherInfo.innerHTML =
//       "<p>Network error. Please check your connection and try again 📶</p>";
//   }
// }
// Naya Key Test karein: 277de88065fd44ba557c3cf2492a6b89

// const apiKey = "38c9cd9c2711cf74e7a1d9da0fbe0263";

// async function getWeather() {
//   const city = document.getElementById("cityInput").value;
//   const weatherInfo = document.getElementById("weatherInfo");

//   if (city === "") {
//     weatherInfo.innerHTML = "<p>Please enter a city name 🌆</p>";
//     return;
//   }

//   try {
//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
//     );
//     const data = await response.json();

//     if (data.cod === "404") {
//       weatherInfo.innerHTML = "<p>City not found 😢</p>";
//       return;
//     }

//     weatherInfo.innerHTML = `
//       <h2>${data.name}</h2>
//       <h3>${Math.round(data.main.temp)}°C</h3>
//       <p>${data.weather[0].description}</p>
//       <p>💧 Humidity: ${data.main.humidity}%</p>
//       <p>🌬️ Wind: ${data.wind.speed} m/s</p>
//     `;
//   } catch (error) {
//     weatherInfo.innerHTML = "<p>Something went wrong ❌</p>";
//   }
// }
