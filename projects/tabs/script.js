const tabs = document.querySelector('.tabs')

tabs.addEventListener('click', function(event) {
  event.preventDefault()

  // keyboard keys
  const KEY_LEFT_ARROW = 37
  const KEY_UP_ARROW = 38
  const KEY_RIGHT_ARROW = 39
  const KEY_DOWN_ARROW = 40
  const KEY = event.which || event.keyCode


  const bntTab = event.target.matches('[role="tab"]')
  if (bntTab) {
    document.querySelector('')
    console.log(event.target.getAttribute('id'))
  }

})