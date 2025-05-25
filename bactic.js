let btn = document.getElementById("btn")
let username = document.getElementById("name")
let Age = document.getElementById("age")
let para = document.getElementById("para")
let submitform = document.getElementById("submitform")

submitform.addEventListener("submit", (event) => {
    event.preventDefault()
    let age = Age.value.trim()
    let name = username.value.trim().toLowerCase();
    if (name === "" && age === "") {
        para.innerText = ` please form   fill `
    }
    else {
        para.innerText = `  Hello!  I   am  ${name} .   I   am   ${age} year  old`
    }



})








