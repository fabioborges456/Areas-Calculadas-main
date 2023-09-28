let inputMinor = document.getElementById('minorBase')
let inputLarge = document.getElementById('largeBase')
let inputHeight = document.getElementById('height')

let result_trapeze = document.getElementById('resultTrapeze')

function CalcTrapeze() {
  let minorBase = inputMinor.value
  let largeBase = inputLarge.value
  let height = inputHeight.value

  let AreaTrapeze = ((parseInt(minorBase) + parseInt(largeBase)) / 2) * height

  result_trapeze.innerHTML = `<div class="resultTrapeze"><p> A área do trapézio é ${AreaTrapeze} um²</p>`
}
function ClearFields() {
  document.getElementById('minorBase').value = ' '
  document.getElementById('largeBase').value = ' '
  document.getElementById('height').value = ' '
  document.getElementById('resultTrapeze').innerHTML = ' '
}
