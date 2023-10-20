const app = document.querySelector('.app-dom');

// create form element
let elForm = document.createElement('form');
elForm.className = 'form';
app.appendChild(elForm);

// create input username element
let elInputUsername = document.createElement('input');
elInputUsername.setAttribute('type', 'text');
elInputUsername.setAttribute('placeholder', 'Username');
elForm.appendChild(elInputUsername);

// create input password element
let elInputPassword = document.createElement('input');
elInputPassword.setAttribute('type', 'password');
elInputPassword.setAttribute('placeholder', 'Password');
elForm.appendChild(elInputPassword);

// create button submit element
let elButtonSubmit = document.createElement('button');
elButtonSubmit.setAttribute('type', 'submit');
elButtonSubmit.textContent = 'Submit';
elForm.appendChild(elButtonSubmit);

// create button toggle password element
let elButtonTogglePassword = document.createElement('button');
elButtonTogglePassword.setAttribute('type', 'button');
elButtonTogglePassword.setAttribute('aria-pressed', 'false');
elButtonTogglePassword.textContent = 'Toggle Password';
elForm.appendChild(elButtonTogglePassword);

// create event listener for button toggle password
elButtonTogglePassword.addEventListener('click', function(event) {
    event.preventDefault();

    // for accessibility and usability
    let isButtonPressed = elButtonTogglePassword.getAttribute('aria-pressed');
    
    if (isButtonPressed === 'false') {
      elButtonTogglePassword.setAttribute('aria-pressed', 'true');
      elInputPassword.setAttribute('type', 'text');
    } else {
      elButtonTogglePassword.setAttribute('aria-pressed', 'false');
      elInputPassword.setAttribute('type', 'password');
    }
});

// script for form native html
let btnTogglePassword = document.querySelector('.btn-toggle-password');
let inputPassword = document.querySelector('.input-password');

// create event listener for button toggle password
btnTogglePassword.addEventListener('click', function(event) {
    event.preventDefault();

    // for accessibility and usability
    let isButtonPressed = btnTogglePassword.getAttribute('aria-pressed');

    if (isButtonPressed === 'false') {
        btnTogglePassword.setAttribute('aria-pressed', 'true');
        inputPassword.setAttribute('type', 'text');
    } else {
        btnTogglePassword.setAttribute('aria-pressed', 'false');
        inputPassword.setAttribute('type', 'password');
    }
});