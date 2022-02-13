const log = console.log;
log("hi");
let firstName;

const submit = document.querySelector("#submitbtn");


function spitName(e) {
    // e.preventDefault();
    firstName = document.querySelector("input[name='first_name'").value
    log(firstName);
}


submit.addEventListener('click', spitName);



window.localStorage.setItem('firstName', document.querySelector("input[name='first_name'").value);
window.localStorage.setItem('lastName', document.querySelector("input[name='last_name'").value);
window.localStorage.setItem('email', document.querySelector("input[name='email'").value);
window.localStorage.setItem('phoneNum', document.querySelector("input[name='phoneNum'").value);
window.localStorage.setItem('password', document.querySelector("input[name='password'").value);


