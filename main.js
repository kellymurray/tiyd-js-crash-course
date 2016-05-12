//thanks to Tim Whittaker for use of his example

// Grab the inputs
var input1 = document.querySelector('#num_one');
var input2 = document.querySelector('#num_two');

// grab the calculate button
var calcBtn = document.querySelector('#calculateBtn');

// grab the answer field
var answerField = document.querySelector('#answer');

// Value Holder
var value1, value2;

// Calculate the value of the Input Fields
function calculate () {
  value1 = input1.value;
  value2 = input2.value;

  answerField.innerHTML = Number(value1) + Number(value2);
}

// Add a "watcher" to our button
calcBtn.addEventListener('click', calculate);
