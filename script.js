const
canvas = document.querySelector('#canvas'),
ctx = document.getContext('2d'),
// drawing rectangles
fillRect = ctx.fillRect.bind(ctx),
strokeRect = ctx.strokeRect.bind(ctx),
clearRect = ctx.clearRect.bind(ctx),

// paths
beginPath = ctx.beginPath.bind(ctx),
closePath = ctx.closePath.bind(ctx),

moveTo = ctx.moveTo.bind(ctx),
lineTo = ctx.lineTo.bind(ctx),

bezierCurveTo = ctx.bezierCurveTo.bind(ctx),
quadraticCurveTo = ctx.quadraticCurveTo.bind(ctx),

arc = ctx.arc.bind(ctx),
arcTo = ctx.arcTo.bind(ctx),
ellipse = ctx.ellipse.bind(ctx),

rect = ctx.rect.bind(ctx),
roundRect = ctx.roundRect.bind(ctx),

// drawing/filling
fill = ctx.fill.bind(ctx),
stroke = ctx.stroke.bind(ctx),
clip = ctx.clip.bind(ctx),

// transforms
save = ctx.save.bind(ctx),
restore = ctx.restore.bind(ctx),

scale = ctx.scale.bind(ctx),
rotate = ctx.rotate.bind(ctx),
translate = ctx.translate.bind(ctx),

transform = ctx.transform.bind(ctx),
setTransform = ctx.setTransform.bind(ctx),
resetTransform = ctx.resetTransform.bind(ctx),

// text
fillText = ctx.fillText.bind(ctx),
strokeText = ctx.strokeText.bind(ctx),
measureText = ctx.measureText.bind(ctx),

// images
drawImage = ctx.drawImage.bind(ctx),

// image data
createImageData = ctx.createImageData.bind(ctx),
getImageData = ctx.getImageData.bind(ctx),
putImageData = ctx.putImageData.bind(ctx),

// gradients/patterns
createLinearGradient = ctx.createLinearGradient.bind(ctx),
createRadialGradient = ctx.createRadialGradient.bind(ctx),
createPattern = ctx.createPattern.bind(ctx),

// line styles
setLineDash = ctx.setLineDash.bind(ctx),
getLineDash = ctx.getLineDash.bind(ctx),

// hit detection
isPointInPath = ctx.isPointInPath.bind(ctx),
isPointInStroke = ctx.isPointInStroke.bind(ctx),

// property helpers
setFillStyle = value => ctx.fillStyle = value,
setStrokeStyle = value => ctx.strokeStyle = value,

setLineWidth = value => ctx.lineWidth = value,
setLineCap = value => ctx.lineCap = value,
setLineJoin = value => ctx.lineJoin = value,

setFont = value => ctx.font = value,
setTextAlign = value => ctx.textAlign = value,
setTextBaseline = value => ctx.textBaseline = value,

setGlobalAlpha = value => ctx.globalAlpha = value,
setGlobalCompositeOperation = value => ctx.globalCompositeOperation = value,

resizeCanvas = () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
},

art = [
  () => {
    
  }
]

art[0]()