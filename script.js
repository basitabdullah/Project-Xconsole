let Container1 = document.querySelector(".subContainer1")
let Container2 = document.querySelector(".subContainer2")
let arrowLeft = document.querySelector(".arrowLeft")
let arrowRight = document.querySelector(".arrowRight")
let slider = document.querySelector(".slider")
let circle1 = document.querySelector(".circle1")
let circle2 = document.querySelector(".circle2")
let HamIcon = document.querySelector(".bars")
let hamburgerMenu = document.querySelector(".hamburgerMenu")
let arrowHam = document.querySelector(".arrowHam")
let clicked = 0;

Container1.addEventListener("click", () => {
    Container1.style.backgroundColor = "rgb(236, 236, 236)"
    Container2.style.backgroundColor = "transparent"
    Container2.style.transition = "0.5s ease-in-out"

})
Container2.addEventListener("click", () => {
    Container2.style.backgroundColor = "rgb(236, 236, 236)"
    Container1.style.backgroundColor = "transparent"
    Container2.style.transition = "0.5s ease-in-out"

})

arrowRight.addEventListener("click", () => {

    slider.style.transform = "translateX(-49vh)"
    circle1.style.backgroundColor = "rgb(193, 233, 250)"
    circle2.style.backgroundColor = "rgb(51, 132, 167)"


})

arrowLeft.addEventListener("click", () => {

    slider.style.transform = "translateX(0vh)"
    circle2.style.backgroundColor = "rgb(193, 233, 250)"
    circle1.style.backgroundColor = "rgb(51, 132, 167)"

})

circle1.addEventListener("click", () => {
    slider.style.transform = "translateX(0vh)"
    circle2.style.backgroundColor = "rgb(193, 233, 250)"
    circle1.style.backgroundColor = "rgb(51, 132, 167)"
})
circle2.addEventListener("click", () => {
    slider.style.transform = "translateX(-49vh)"
    circle1.style.backgroundColor = "rgb(193, 233, 250)"
    circle2.style.backgroundColor = "rgb(51, 132, 167)"

})
HamIcon.addEventListener("click", () => {
    hamburgerMenu.style.display = "flex"

})
arrowHam.addEventListener("click", () => {
    hamburgerMenu.style.display = "none"


})