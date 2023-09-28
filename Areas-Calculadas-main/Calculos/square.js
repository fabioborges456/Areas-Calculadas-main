let inputSq = document.getElementById('faceSquare')
let result_square = document.getElementById('resultSquare')

function CalcSquare() {
  let faceSquare = inputSq.value

  let AreaSquare = faceSquare * faceSquare

  result_square.innerHTML = `<div class="resultSquare"><p> A área do quadrado é ${AreaSquare} um²</p>`
}
function ClearFields() {
  document.getElementById('faceSquare').value = ' '
  document.getElementById('resultSquare').innerHTML = ' '
}
