const menuBtn = document.querySelector(".nav-toggle")
const nav = document.querySelector(".nav")

menuBtn.addEventListener("click", () => {
    document.body.classList.toggle("nav-open")
    console.log("click")
})