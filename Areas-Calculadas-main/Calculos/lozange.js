let inputShortDiag = document.getElementById('shortDiag')
let inputLongerDiag = document.getElementById('longerDiag')

let result_lozange = document.getElementById('resultLozange')

function CalcLozange() {
  let shortSide = inputShortDiag.value
  let longerSide = inputLongerDiag.value

  let AreaLozange = (shortSide * longerSide) / 2

  result_lozange.innerHTML = `<div class="resultLozange"><p> A área do retângulo é ${AreaLozange} um²</p>`
}
function ClearFields() {
  document.getElementById('shortDiag').value = ' '
  document.getElementById('longerDiag').value = ' '
  document.getElementById('resultLozange').innerHTML = ' '
}
