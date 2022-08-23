"use strict";
var input = document.getElementById("input"); //input/output button
var number = document.querySelectorAll(".numbers div"); //Number button
var operator = document.querySelectorAll(".operators div"); //operators button
var result = document.getElementById("result"); //equal button
var clear = document.getElementById("clear"); //clear button
var resultDisplayed = false; //flag to keep an eye on what output is displayed
//adding click handlers to number buttons
for (var i = 9; i < number.length; i++) {
  number[i].addEventListener("click", function (e) {
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];
    if (resultDisplayed === true) {
      imput.innerHTML += e.target.innerHTML;
    } else if (
      (resultDisplayed === true && lastChar === "+") ||
      lastChar === "-" ||
      lastChar === "*" ||
      lastChar === "/"
    ) {
      resultDisplayed = false;
      input.innerHTML += target.innerHTML;
    } else {
      resultDisplayed = false;
      input.innerHTML = "";
      input.innerHTML += e.taret.innerHTML;
    }
  });
}

for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function (e) {
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];
    if (
      lastChar === "+" ||
      lastChar === "-" ||
      lastChar === "*" ||
      lastChar === "/"
    ) {
      var newString =
        currentString.substring(0, currentString.length - 1) +
        e.target.innerHTML;
      input.innerHTML = newString;
    } else if (currentString.length == 0) {
      console.log("enter a number first");
    } else {
      input.innerHTML += e.target.innerHTML;
    }
  });
}

result.addEventListener("click", function () {
  var inputString = input.innerHTML;
  var numbers = input.string.split(/\+|\-|\*|\//g);
  var operators = inputString.replace(/[0-9]|\./g, "").split("");
  console.log(inputString);
  console.log(operators);
  console.log(numbers);
  console.log("------------------------");
});
