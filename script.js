let inputName = document.getElementById('firstname')
let displayedName = document.getElementById('display-firstname')

inputName.addEventListener('keyup', () => {
    displayedName.textContent = inputName.value;
})

let inputAge = document.getElementById('age')
let adultsOnly = document.getElementById('a-hard-truth')

inputAge.addEventListener('keyup', () => {
    if (inputAge.value >= 18) {adultsOnly.style.visibility = "visible"}
 else {adultsOnly.style.visibility = "hidden"}
})

let inputPassword = document.getElementById('pwd')
let confirmPassword = document.getElementById('pwd-confirm')

inputPassword.addEventListener('keyup', () => {
    if (inputPassword.value.length < 6) {
        inputPassword.setAttribute("style", "background-color: red");
    } else {inputPassword.setAttribute("style", "background-color: white")}
})

confirmPassword.addEventListener('keyup', () => {
    if (confirmPassword.value !== inputPassword.value) {
        confirmPassword.setAttribute("style", "background-color: red");
    } else {confirmPassword.setAttribute("style", "background-color: white")}
})

let darkModeToggle = document.getElementById('toggle-darkmode')

darkModeToggle.addEventListener('change', (event) => {
    document.body.setAttribute("style", "background-color: black; color: white")
})







