'use strict';

let numbers = [];
for (let i = 1; i <= 5; i++) {
  let syote = prompt("Enter a number:");
  numbers.push(Number(syote));
}


console.log("Numbers:", numbers);

console.log("Numbers: " + numbers);


let etsinumero = Number(prompt("Enter a Number to Search:" ));

if (numbers.includes(etsinumero)) {
  console.log("number " + etsinumero + "is found in the array .");
} else {
  console.log("The number " + etsinumero + " is not found.");
};


numbers.pop ();
console.log("Updated Numbers:" + numbers);

numbers.sort(function(a, b){
  return a-b
});

console.log("Sorted Numbers:" + numbers);

document.querySelector("target").innerHTML = numbers;
