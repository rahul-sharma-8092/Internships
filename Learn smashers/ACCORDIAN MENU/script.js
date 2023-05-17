const accordion = document.getElementsByClassName("accordion");
const accordionContent = document.getElementsByClassName("accordion-content");
const iconPlus = document.querySelectorAll(".icon-plus");
const iconMinus = document.querySelectorAll(".icon-minus");

for (let i = 0; i < accordion.length; i++) {
	accordion[i].addEventListener("click", () => {
		accordionContent[i].classList.toggle("active");
		for (let j = 0; j < accordion.length; j++) {
			if (i == j) {
				continue;
			} else {
				accordionContent[j].classList.remove("active");
				iconPlus[j].style.display = "block";
				iconMinus[j].style.display = "none";
			}
		}
		if (accordionContent[i].classList.contains("active")) {
			iconPlus[i].style.display = "none";
			iconMinus[i].style.display = "block";
		} else {
			iconPlus[i].style.display = "block";
			iconMinus[i].style.display = "none";
		}
	});
}
