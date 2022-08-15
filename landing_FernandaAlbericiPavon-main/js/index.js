// navbar:
const toggle = document.querySelector(".toggle")
const navmenu = document.querySelector(".navmenu")

toggle.addEventListener("click", () => {
    navmenu.classList.toggle("visible");
});

