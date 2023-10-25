const btnTogglePassword = document.querySelector('.js-button-toggle-view-password');

btnTogglePassword.addEventListener('click', function(event) {
    event.preventDefault();

    if (event.target.getAttribute('aria-pressed') === 'false') {
        event.target.setAttribute('aria-pressed', 'true');
        event.target.innerText = 'Hide';
        event.target.previousElementSibling.setAttribute('type', 'text');
    } else {
        event.target.setAttribute('aria-pressed', 'false');
        event.target.innerText = 'Show';
        event.target.previousElementSibling.setAttribute('type', 'password');
    }
});