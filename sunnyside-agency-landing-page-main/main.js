const hamburger = document.querySelector(".hamburger")
const mobileNavigation = document.querySelector(".nav-links")

hamburger.addEventListener("click", e => {
    hamburger.classList.toggle("active")
    mobileNavigation.classList.toggle("open")
})

