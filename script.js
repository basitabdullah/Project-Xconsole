let Container1 = document.querySelector(".subContainer1")
let Container2 = document.querySelector(".subContainer2")
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