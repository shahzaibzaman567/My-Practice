
let para = document.querySelector(".para")
let btn1 = document.getElementById("btn1")
btn1.addEventListener("click", () => {


    para.style.color = "red"

    console.log(para.textContent)
})
let paragraph = document.querySelectorAll(".para")
let btn2 = document.getElementById("btn2")
btn2.addEventListener("click", () => {


    paragraph[0].style.color = "blue"
    paragraph[1].style.color = "blue"
    paragraph[2].style.color = "blue"

    console.log(paragraph[0].textContent)
    console.log(paragraph[1].textContent)
    console.log(paragraph[2].textContent)
})














