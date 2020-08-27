const menuToggle = document.getElementById("menuToggle");

menuToggle.addEventListener("click", function () {
	const mobileMenu = document.getElementById("nav_menu_mobile");
	mobileMenu.classList.toggle("show");
});
