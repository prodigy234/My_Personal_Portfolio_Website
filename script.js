var typed = new Typed(".input", {
    strings: ["Certified Data Analyst", "Certified SQL Programmer", "Seasoned Mobile App Developer", "Professional Data Scientist"],
    typeSpeed: 70,
    backSpeed: 60,
    loop:true
})

// sticky-header-js
const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 0)
})