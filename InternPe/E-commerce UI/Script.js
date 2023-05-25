const MainImg = document.getElementById("mainImg");
const smallImg = document.getElementsByClassName("small-img");

smallImg[0].addEventListener("click", () => {
	MainImg.src = smallImg[0].src;
});
smallImg[1].addEventListener("click", () => {
	MainImg.src = smallImg[1].src;
});
smallImg[2].addEventListener("click", () => {
	MainImg.src = smallImg[2].src;
});
smallImg[3].addEventListener("click", () => {
	MainImg.src = smallImg[3].src;
});
