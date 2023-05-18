const fullImgBox = document.querySelector(".full-image");
const fullImg = document.querySelector(".full-image img");

function openImg(pic) {
	fullImgBox.style.display = "flex";
	fullImg.src = pic;
}

function closeImg() {
	fullImgBox.style.display = "none";
}
