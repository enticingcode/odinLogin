const log = console.log;

let test = 1;
let firstName;

const submit = document.querySelector("#submitbtn");

log(submit);

function spitName(e) {
    // e.preventDefault();
    firstName = document.querySelector("input[name='first_name'").value
    log(firstName);
}


submit.addEventListener('click', spitName);

log('hi');


window.localStorage.setItem('firstName', document.querySelector("input[name='first_name'").value);
// window.localStorage.setItem('firstName', document.querySelector("input[name='first_name'").value);
// window.localStorage.setItem('firstName', document.querySelector("input[name='first_name'").value);
// window.localStorage.setItem('firstName', document.querySelector("input[name='first_name'").value);
// window.localStorage.setItem('firstName', document.querySelector("input[name='first_name'").value);


function getValues() {
    firstName = window.localStorage.getItem('firstName');

}

getValues();