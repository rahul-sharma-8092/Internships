// Query Selector
const eventContainer = document.querySelector(".event-container");
const formContainer = document.querySelector(".form-container");

// Event Selectors
const dayTitle = document.getElementById("day_title");
const dayName = document.getElementById("day_name");
const hourTitle = document.getElementById("hour_title");
const hourName = document.getElementById("hour_name");
const minuteTitle = document.getElementById("minute_title");
const minuteName = document.getElementById("minute_name");
const secondTitle = document.getElementById("second_title");
const secondName = document.getElementById("second_name");

// Time Selector
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 60;

// Countdown Timer
let countdownTimer;

// Function: add hidden class
function addHiddenClass(element) {
	element.classList.add("hidden");
}

// Function: remove hidden class
function removeHiddenClass(element) {
	element.classList.remove("hidden");
}

// Function: check storage
function checkLocalStorage() {
	if (
		(localStorage.getItem("eventTracker.event") === "",
		localStorage.getItem("eventTracker.event") === "[]")
	) {
		showForm();
	} else {
		const event = JSON.parse(localStorage.getItem("eventTracker.event"));
		showEvent(event.title, event.date);
	}
}

// Function: show form
function showForm() {
	removeHiddenClass(formContainer);
	addHiddenClass(eventContainer);
	deleteEventFromLocalStorage();
	const title = document.querySelector("#title");
	title.focus();
}

// Function: saveEventToLocalStorage
function saveEventToLocalStorage(title, date) {
	const event = {
		title,
		date,
	};
	localStorage.setItem("eventTracker.event", JSON.stringify(event));
}

// Function: deleteEventFromLocalStorega
function deleteEventFromLocalStorage() {
	localStorage.setItem("eventTracker.event", "[]");
}

// Function: startCountdownTimer
function startCountdownTimer(title, date) {
	const eventTitle = document.querySelector(".event_title");
	eventTitle.textContent = title;
	updateCountdown(date);
	countdownTimer = setInterval(() => {
		updateCountdown(date);
	}, 1000);
}

// Function: updateCountdown
function updateCountdown(date) {
	const currentTime = new Date().getTime();
	const countdownTime = date - currentTime;

	// Time math
	const newDay = Math.floor(countdownTime / day);
	const newHour = Math.floor((countdownTime % day) / hour);
	const newMinute = Math.floor((countdownTime % hour) / minute);
	const newSecond = Math.floor((countdownTime % minute) / second);

	// Update Event
	dayTitle.textContent = newDay;
	hourTitle.textContent = newHour;
	minuteTitle.textContent = newMinute;
	secondTitle.textContent = newSecond;

	// Update Names
	dayName.textContent = `Day${newDay === 1 ? "" : "s"}`;
	hourName.textContent = `Hour${newHour === 1 ? "" : "s"}`;
	minuteName.textContent = `Minute${newMinute === 1 ? "" : "s"}`;
	secondName.textContent = `Second${newSecond === 1 ? "" : "s"}`;

	if (newDay === 0 && newHour === 0 && newMinute === 0 && newSecond === 0) {
		// do this for 30 seconds
		let duration = 3 * 1000;
		let end = Date.now() + duration;

		(function frame() {
			// launch a few confetti from the left edge
			confetti({
				particleCount: 7,
				angle: 60,
				spread: 55,
				origin: { x: 0 },
			});
			// and launch a few from the right edge
			confetti({
				particleCount: 7,
				angle: 120,
				spread: 55,
				origin: { x: 1 },
			});

			// keep going until we are out of time
			if (Date.now() < end) {
				requestAnimationFrame(frame);
			}
		})();
		clearInterval(countdownTimer);
		setTimeout(() => {
			showForm();
		}, 2000);
	}
}

// Function: show event
function showEvent(title, event) {
	saveEventToLocalStorage(title, event);
	startCountdownTimer(title, event);
	removeHiddenClass(eventContainer);
	addHiddenClass(formContainer);
}

// Event: Submit form
const form = document.querySelector("form").addEventListener("submit", (e) => {
	e.preventDefault();
	const title = document.querySelector("#title");
	const eventInput = document.querySelector("#event");
	const event = new Date(eventInput.value).getTime();

	// Validator
	if (title.value === "" || eventInput.value === "") {
		return alert("Please enter a title and a date");
	}
	showEvent(title.value, event);

	title.value = "";
	eventInput.value = "";
});

// Event: delete btn
const eventBtn = document.querySelector(".event_btn").addEventListener("click", showForm);

// Event: window load
window.addEventListener("DOMContentLoaded", checkLocalStorage);
