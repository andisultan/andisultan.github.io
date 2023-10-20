// elements
let timer = document.querySelector('[data-stopwatch="time"]')
const btnPlay = document.querySelector('[data-stopwatch="play"]')
const btnReset = document.querySelector('[data-stopwatch="reset"]')

let seconds = 0
let minutes = 0
let hours = 0

let timeInterval = null
let timetStatus = 'stopped'

function stopWatch() {
  seconds++

  if(seconds / 60 == 1){
      seconds = 0;
      minutes ++;

      if(minutes / 60 == 1) {
          minutes = 0;
          hours++
      }
  }

  timer.innerText = `${hours.toString().padEnd(2, 0)}:${minutes.toString().padEnd(2, 0)}:${seconds.toString().padEnd(2, 0)}`
}

btnPlay.addEventListener('click', function(event) {
  event.preventDefault()

  if(timetStatus === 'stopped') {
    timeInterval = window.setInterval(stopWatch, 100)
    this.innerText = 'Stop'
    timetStatus = 'started'
  } else {
    window.clearInterval(timeInterval)
    this.innerText = 'Play'
    timetStatus = 'stopped'
  }
})

btnReset.addEventListener('click', function() {
  window.clearInterval(timeInterval)
  timeInterval = null
  btnPlay.innerText = 'Play'
  timetStatus = 'stopped'
  seconds = 0
  minutes = 0
  hours = 0

  timer.innerText = "00:00:00"
})