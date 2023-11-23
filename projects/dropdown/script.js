const body = document.querySelector('body')

body.addEventListener('click', function(event) {
  event.preventDefault()

  if (event.target.matches('.dropdown__toggle')) {
    event.target.parentElement.classList.toggle('dropdown--active')
  } else {
    // if the user clicks outside any dropdown, close all dropdowns
    document.querySelectorAll('.dropdown').forEach(function(dropdown) {
      dropdown.classList.remove('dropdown--active')
    })
  }
})