function getValues() {
    firstName = window.localStorage.getItem('firstName');
    lastName = window.localStorage.getItem('lastName');
    email = window.localStorage.getItem('email');
    phoneNum = window.localStorage.getItem('phoneNum');
    password = window.localStorage.getItem('password');
}

getValues();