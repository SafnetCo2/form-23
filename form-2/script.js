const formEl = document.getElementById("form");
const userEl = document.getElementById("username");
const passEl = document.getElementById("pass");
const messageEl = document.getElementById("message")
const btnEl = document.getElementById("submit");

let error = [];
let success = "";
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (username.value = "") {
        error.push("enter username");

    }
    if (password.value = "") {
        error.push('enter valid password')
    }
    alert("form submitted");
    messageEl.innerText = error;
});






