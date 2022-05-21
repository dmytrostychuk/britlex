
let burgerBth = document.querySelector(".burger-bth");
let navList = document.querySelector(".menu__nav");

if(burgerBth) {
	burgerBth.addEventListener("click", function (e) {
		navList.classList.toggle("menu__nav-active");
		burgerBth.classList.toggle("burger-bth-active");
	})
}