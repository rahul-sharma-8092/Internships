const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const error = document.querySelector(".error");
const weather = document.querySelector(".weather");
const weatherImg = document.querySelector(".details img");

const apiKey = "3d87ec9b43694a2fde5c9b670f176a18";

async function checkWeather(city) {
	// Api URL
	const apiURL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

	const response = await fetch(apiURL);
	let data = await response.json();

	console.log(data);

	if (data.cod == 404) {
		error.style.display = "block";
		weather.style.display = "none";
	} else {
		weather.style.display = "block";
		error.style.display = "none";

		// Updating Temprature
		document.querySelector(".details h1").innerHTML = `${Math.round(data.main.temp)} &#8451;`;

		// Updating City name
		document.querySelector(".details h2").innerHTML = `${data.name}`;

		// Update Humadity
		document.getElementById("humadity-value").innerHTML = `${data.main.humidity}%`;

		// Updating wind
		document.getElementById("wind-value").innerHTML = `${data.wind.speed} km/h`;

		// Updating Image
		if (data.weather[0].main == "Clear") {
			weatherImg.src = "./images/clear.png";
		} else if (data.weather[0].main == "Clouds") {
			weatherImg.src = "./images/clouds.png";
		} else if (data.weather[0].main == "Drizzle") {
			weatherImg.src = "./images/drizzle.png";
		} else if (data.weather[0].main == "Mist") {
			weatherImg.src = "./images/mist.png";
		} else if (data.weather[0].main == "Rain") {
			weatherImg.src = "./images/rain.png";
		}
	}
}

// Function Call on Search button click
searchBtn.addEventListener("click", () => {
	const city = searchInput.value;
	checkWeather(city);
});
