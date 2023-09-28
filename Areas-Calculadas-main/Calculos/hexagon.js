let inputHexa = document.getElementById('sideHexa')
let result_hexagon = document.getElementById('resultHexagon')

function CalcHexagon() {
  let sideHexa = inputHexa.value

  let AreaHexa = (3 * sideHexa ** 2 * 1.7320508076) / 2
  let AreaHexagon = parseFloat(AreaHexa.toFixed(2))

  result_hexagon.innerHTML = `<div class="resultHexagon"><p> A área do pentágono é ${AreaHexagon} um²</p>`
}
function ClearFields() {
  document.getElementById('sideHexa').value = ' '
  document.getElementById('resultHexagon').innerHTML = ' '
}
