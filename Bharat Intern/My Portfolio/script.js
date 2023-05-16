const navbar = document.getElementById("navbar");
const humberger = document.getElementById("humberger");
const menu = document.getElementById("menu");

// Scroll Navbar
document.addEventListener("scroll", () => {
	if (window.scrollY > 10) {
		navbar.classList.add("sticky");
		lio.style = "color: #fff";
	} else {
		navbar.classList.remove("sticky");
		lio.style = "color: #9b1ddf";
	}
});

humberger.addEventListener("click", () => {
	menu.classList.toggle("show");
	navbar.classList.toggle("nav-bgc");
});

menu.addEventListener("click", () => {
	menu.classList.remove("show");
	navbar.classList.remove("nav-bgc");
});

// Typed String 1
var typed = new Typed("#typing", {
	strings: ["Programmer.", "Web Developer."],
	typeSpeed: 60,
	backSpeed: 60,
	loop: true,
});

// Typed String 1
var typed = new Typed("#typing-2", {
	strings: ["Programmer.", "Web Developer."],
	typeSpeed: 60,
	backSpeed: 60,
	loop: true,
});
