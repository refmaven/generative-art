const art = [
  {
    name: 'day 1',
    fn: ctx => {
      ctx.fillStyle = 'black'
      ctx.fillRect(100, 100, 100, 100)
    }
  }
]

const draw = hash => {
  const canvas = document.querySelector('#canvas')
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  if (art[hash]) {
    art[hash].fn(ctx)
  }
}

window.art = art
window.draw = draw

window.addEventListener('resize', () => {
  const index = parseInt(window.location.hash.slice(1)) || 0
  draw(index)
})

window.addEventListener('load', () => {
  const index = parseInt(window.location.hash.slice(1)) || 0
  draw(index)
})