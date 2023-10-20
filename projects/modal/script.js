// elements
let body = document.querySelector('body')
let modalOverlay = document.querySelector('[data-modal="overlay"]')
let modalButtonToggle = document.querySelector('[data-modal="btn-toggle"]')
let modalButtonClose = document.querySelector('[data-modal="btn-close"]')

body.addEventListener( 'click', function(event) {
  event.preventDefault()

  if (event.target.matches('[data-modal="btn-show"]')) {
    modalOverlay.style.display = 'flex'
  }

  if (event.target.matches('[data-modal="btn-close"]')) {
    modalOverlay.style.display = 'none'
  }
})