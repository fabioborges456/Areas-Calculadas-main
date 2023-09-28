let inputPent = document.getElementById('sidePent')
let result_pentagon = document.getElementById('resultPentagon')

function CalcPentagon() {
  let sidePent = inputPent.value

  let AreaPent = (5 * sidePent ** 2) / (4 * 0.726542528)
  let AreaPentagon = parseFloat(AreaPent.toFixed(2))

  result_pentagon.innerHTML = `<div class="resultPentagon"><p> A área do pentágono é ${AreaPentagon} um²</p>`
}
function ClearFields() {
  document.getElementById('sidePent').value = ' '
  document.getElementById('resultPentagon').innerHTML = ' '
}
