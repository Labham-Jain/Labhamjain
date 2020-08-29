// Navigation Bar Menu Button
const menuToggle = document.getElementById("menuToggle");

menuToggle.addEventListener("click", function () {
	const mobileMenu = document.getElementById("nav_menu_mobile");
	mobileMenu.classList.toggle("show");
});

// Patterns

function generatePatterns() {
	let screenWidth = window.innerWidth;
	let screenHeight = window.innerHeight;
	const bottomPattern = document.getElementById("bottomPatternFloat");

	bottomPattern.innerHTML = "";

	let circleCount = 3;

	if (screenWidth >= 500) circleCount = 4;
	if (screenWidth >= 700) circleCount = 9;
	if (screenWidth >= 1200) circleCount = 12;

	for (
		let countOfCircles = 0;
		countOfCircles < circleCount;
		countOfCircles++
	) {
		let circle = document.createElement("div");

		let size = [40, 55, 60, 85];

		let sizeForACircle = size[Math.floor(Math.random() * size.length)];

		circle.style.width = sizeForACircle + "px";
		circle.style.height = sizeForACircle + "px";

		circle.style.left = Math.floor(Math.random() * screenWidth) + "px";

		// '56' refers to 3.5rem (height of bottom pattern)
		circle.style.top = Math.floor(Math.random() * 56) + "px";
		bottomPattern.appendChild(circle);
	}
}

generatePatterns();
window.addEventListener("resize", generatePatterns);

// Adding Class On Navbar When Scrolling

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
	let scroll = window.scrollY;

	if (scroll > 60) {
		navbar.classList.add("scrolled");
	} else {
		navbar.classList.remove("scrolled");
	}
});
