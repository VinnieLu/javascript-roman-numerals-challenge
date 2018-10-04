
// We did some stuff for you! This is basic logic for affecting the DOM.
// It short circuits the page's HTML form and fires off a handbuilt JS function.
window.onload = function() {
  var form = document.querySelector('.input-form')
  form.addEventListener('submit',printConvertedValue,false)
}

// This is the function that actually adds the output to the DOM. Don't change
// this!
var printConvertedValue = function(event) {
  event.preventDefault()
  var number = this.number.value
  var outputDiv = document.querySelector('.output')
  outputDiv.innerText = numeralConverter(number)
}


// numeralConverter takes a string that looks like a number as an input, e.g. '111'.
// numeralConverter should output a string of characters corresponds to a Roman Numeral, e.g. 'XXVI'
var numeralConverter = function(numString) {
 final = ""
  if (numString / 1000 > 0) {
    sub = "M".repeat(Math.floor(numString/1000))
    numString = numString - (1000 * (Math.floor(numString/1000)))
    final = final.concat(sub)
  } 
  if (numString / 500 > 0) {
    sub = "D".repeat(Math.floor(numString/500))
    numString = numString - (500 * (Math.floor(numString/500)))
    final = final.concat(sub)
  }
  if (numString / 100 > 0) {
    sub = "C".repeat(Math.floor(numString/100))
    numString = numString - (100 * (Math.floor(numString/100)))
    final = final.concat(sub)
  }
  if (numString / 50 > 0) {
    sub = "L".repeat(Math.floor(numString/50))
    numString = numString - (50 * (Math.floor(numString/50)))
    final = final.concat(sub)
  }
  if (numString / 10 > 0) {
    sub = "X".repeat(Math.floor(numString/10))
    numString = numString - (10 * (Math.floor(numString/10)))
    final = final.concat(sub)
  }
  if (numString / 5 > 0) {
    sub = "V".repeat(Math.floor(numString/5))
    numString = numString - (5 * (Math.floor(numString/5)))
    final = final.concat(sub)
  }
    if (numString / 1 > 0) {
    sub = "I".repeat(Math.floor(numString/1))
    numString = numString - (1 * (Math.floor(numString/1)))
    final = final.concat(sub)
  }
  return final
}

// your helper functions go here!