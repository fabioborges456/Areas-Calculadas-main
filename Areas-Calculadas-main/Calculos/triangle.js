let inputBase = document.getElementById('base')
let inputHeight = document.getElementById('height')

let result_triangle = document.getElementById('resultTriangle')

function CalcTriangle() {
  let base = inputBase.value
  let height = inputHeight.value

  let AreaTriangle = (base * height) / 2

  result_triangle.innerHTML = `<div class="resultTriangle"><p> A área do triângulo é ${AreaTriangle} um²</p>`
}
function ClearFields() {
  document.getElementById('base').value = ' '
  document.getElementById('height').value = ' '
  document.getElementById('resultTriangle').innerHTML = ' '
}
