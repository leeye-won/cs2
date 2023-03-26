const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector("#login-from input");


function onLoginSubmit() {
    const username = loginInput.ariaValueMax;
    console.log(username);
}

loginForm.addEventListener("submit,onLoginSubmit");