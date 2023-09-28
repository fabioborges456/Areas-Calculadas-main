let inputR = document.getElementById('radius')
let result_circle = document.getElementById('resultCircle')

function CalcCircle() {
  let radius = inputR.value

  let AreaCircle = 3.14 * radius ** 2

  result_circle.innerHTML = `<div class="resultCircle"><p> A área do círculo é ${AreaCircle} um²</p>`
}
function ClearFields() {
  document.getElementById('radius').value = ' '
  document.getElementById('resultCircle').innerHTML = ' '
}
