let inputShort = document.getElementById('shortSide')
let inputLonger = document.getElementById('longerSide')

let result_rectangle = document.getElementById('resultRectangle')

function CalcRectangle() {
  let shortSide = inputShort.value
  let longerSide = inputLonger.value

  let AreaRectangle = shortSide * longerSide

  result_rectangle.innerHTML = `<div class="resultRectangle"><p> A área do retângulo é ${AreaRectangle} um²</p>`
}
function ClearFields() {
  document.getElementById('shortSide').value = ' '
  document.getElementById('longerSide').value = ' '
  document.getElementById('resultRectangle').innerHTML = ' '
}
