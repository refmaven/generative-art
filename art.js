const art = [
  {
    name: 'day 1'
  }
]

window.art = art

const canvas = document.querySelector('#canvas')

if (canvas) {
  const ctx = canvas.getContext('2d')

  // Add drawing functions to art objects
  art[0].fn = () => {
    ctx.fillStyle = 'black'
    ctx.fillRect(100, 100, 100, 100)
  }

  const draw = hash => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    if (art[hash]) {
      art[hash].fn()
    }
  }

  window.draw = draw
}