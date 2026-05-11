document.addEventListener('DOMContentLoaded', () => {
  const latestArtPiece = art.length - 1
  const latestLink = document.querySelector('a[href=""]')
  if (latestLink) {
    latestLink.href = `draw.html#${latestArtPiece}`
  }

  const ul = document.querySelector('#art-list')
  if (ul) {
    art.forEach(obj => {
      const li = document.createElement('li')
      const a = document.createElement('a')
      a.href = `draw.html#${art.indexOf(obj)}`
      a.textContent = obj.name
      li.appendChild(a)
      ul.appendChild(li)
    })
  }
})

