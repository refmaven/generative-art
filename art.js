const canvas = document.querySelector('#canvas')

if (!canvas) {
  console.error('Canvas not found!')
} else {
  const ctx = canvas.getContext('2d')

  const art = [
    {
      name: 'day 1',
      fn: () => {
        ctx.fillStyle = 'black'
        ctx.fillRect(100, 100, 100, 100)
      }
    }
  ]

  const draw = hash => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    if (art[hash]) {
      art[hash].fn()
    }
  }

  window.art = art
  window.draw = draw
}