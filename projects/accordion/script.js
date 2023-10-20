// elements
let accordion = document.querySelector('[data-accordion]')
let accordionItems = document.querySelectorAll('[data-accordion="item"')

accordion.addEventListener('click', function(event) {
  event.preventDefault()

  let isButton = event.target.matches('[data-accordion="button"]')
  
  if( isButton ) {
    let isButtonPressed = event.target.getAttribute('aria-pressed')
    if ( isButtonPressed === 'false' ) {
      event.target.setAttribute('aria-pressed', 'true') 
    } else {
      event.target.setAttribute('aria-pressed', 'false')
    }

    let childText = event.target.parentNode.children[1]
    if ( childText.getAttribute('aria-hidden') === 'true' ) {
      childText.setAttribute('aria-hidden', 'false');
      childText.hidden = false;
    } else {
      childText.setAttribute('aria-hidden', 'true');
      childText.hidden = true;
    }
  }

})

