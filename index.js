const menuBtn = document.querySelector(".nav-toggle")
const nav = document.querySelector(".nav")
const navLink = document.querySelectorAll(".nav__link")

menuBtn.addEventListener("click", () => {
    document.body.classList.toggle("nav-open")
})