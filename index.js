const pages = [
  'drum-kit',
  'clock',
  'variables',
  'array-one',
  'gallery',
  'fetch',
  'array-two',
  'canvas',
  'tricks',
  'check',
  'video',
  'konami',
  'slide',
  'objects',
  'local-storage',
  'mouse-move',
  'sort',
  'reduce',
  'webcam',
  'speech',
  'geolocation',
  'follow-along',
  'speech-recognition',
  'sticky',
  'event-capture',
  'drop-down',
  'drag-and-drop',
  'video-speed',
  'countdown',
  'whack-a-mole',
]

const challenges = document.getElementById('challenges')

pages.forEach((page, index) => {
  let a = document.createElement('a')
  let span = document.createElement('span')
  let b = document.createElement('b')

  a.href = `pages/${page}/index.html`
  span.innerHTML = padZero(index + 1)
  b.innerHTML = page

  challenges.appendChild(a)
  a.appendChild(span)
  a.appendChild(b)
})

function padZero(num) {
  if (num < 10) {
    return `00${num}`
  } else if (num => 10 && num < 100) {
    return `0${num}`
  }
}