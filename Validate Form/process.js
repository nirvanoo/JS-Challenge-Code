var form = document.querySelector(".register__form")
var formItem = document.querySelectorAll(".register__item")

var username = document.querySelector("#username")
var email = document.querySelector("#email")
var password = document.querySelector("#password")
var confirmPassword = document.querySelector("#confirm-password")

function showError(input, msg) {
    let parent = input.parentNode;
    let small = parent.querySelector('small');
    parent.classList.add("register__item--error")
    small.innerText = msg;
    input.value = ''
}

function showSuccess(input) {
    let parent = input.parentNode;
    let small = parent.querySelector('small');
    small.innerText = '';
    parent.classList.remove("register__item--error")
}

function checkEmptyError(listInput) {
    let isEmptyError = false
    listInput.forEach(input => {
        input.value = input.value.trim()
        if (!input.value) {
            isEmptyError = true;
            showError(input, 'Required')
        } else {
            showSuccess(input)
        }
    })
    return isEmptyError
}

function checkEmailError(input) {
    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    input.value = input.value.trim()

    let isEmailError = !regexEmail.test(input.value)
    if (isEmailError) {
        showError(input, 'Email Invalid')
    } else {
        showSuccess(input)
    }
    return isEmailError;
}

function checkUserName(input) {
    let regUser = /^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){4,18}[a-zA-Z0-9]$/;
    input.value = input.value.trim()
    let isUserNameError = !regUser.test(input.value);
    if (isUserNameError) {
        showError(input, 'Username can only use letters,numbers, minimum length is 6 characters, maximum length is 20');
    } else {
        showSuccess(input)
    }
    return isUserNameError;
}

function checkPasswordError(input) {
    let regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    let isPasswordError = !regexPassword.test(input.value)
    if (isPasswordError) {
        showError(input, 'Password must be minimum eight characters, at least one letter and one number')
    } else {
        showSuccess(input)
    }
    return isPasswordError
}

function checkMatchPassword(password, cfPassword) {
    let isMatch = true
    if (password.value !== cfPassword.value && !checkPasswordError(password)) {
        showError(cfPassword, 'Password not match')
        isMatch = false
    } else {
        showSuccess(cfPassword)
    }
    return isMatch
}

function showSuccessAll(listInput) {
    listInput.forEach(input => {
        showSuccess(input)
    });
}

form.addEventListener('submit', function(e) {
    e.preventDefault()
    showSuccessAll([username, email, password, confirmPassword])
    let isEmptyError = checkEmptyError([username, email, password, confirmPassword])
    let isEmailError = checkEmailError(email)
    let isUserNameError = checkUserName(username)
    let isPasswordError = checkPasswordError(password)
    let isMatchPassword = checkMatchPassword(password, confirmPassword)

    if (isEmptyError || isEmailError || isUserNameError || isPasswordError || !isMatchPassword) {
        //do nothing
    } else {
        //logic || call api
    }
})