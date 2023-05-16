let celsiusInput = document.getElementById("celsius");
let fahrenheitInput = document.getElementById("fahrenheit");
let kelvinInput = document.getElementById("kelvin");
let btn = document.getElementById("button");

function roundNumber(number) {
	return Math.round(number * 100) / 100;
}

celsiusInput.addEventListener("input", () => {
	let cTemp = parseFloat(celsiusInput.value);
	let fTemp = cTemp * (9 / 5) + 32;
	let kTemp = cTemp + 273.15;

	fahrenheitInput.value = roundNumber(fTemp);
	kelvinInput.value = roundNumber(kTemp);
});

fahrenheitInput.addEventListener("input", () => {
	let fTemp = parseFloat(fahrenheitInput.value);
	let cTemp = (fTemp - 32) * (5 / 9);
	let kTemp = (fTemp - 32) * (5 / 9) + 273.15;

	celsiusInput.value = roundNumber(cTemp);
	kelvinInput.value = roundNumber(kTemp);
});

kelvinInput.addEventListener("input", () => {
	let kTemp = parseFloat(kelvinInput.value);
	let cTemp = kTemp - 273.15;
	let fTemp = (kTemp - 273.15) * (9 / 5) + 32;

	celsiusInput.value = roundNumber(cTemp);
	fahrenheitInput.value = roundNumber(fTemp);
});

btn.addEventListener("click", () => {
	fahrenheitInput.value = "";
	celsiusInput.value = "";
	kelvinInput.value = "";
});
