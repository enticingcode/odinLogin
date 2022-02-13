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

// window.localStorage.setItem('firstName', document.querySelector("input[name='first_name'").value);
// window.localStorage.setItem('firstName', document.querySelector("input[name='first_name'").value);
// window.localStorage.setItem('firstName', document.querySelector("input[name='first_name'").value);
// window.localStorage.setItem('firstName', document.querySelector("input[name='first_name'").value);


