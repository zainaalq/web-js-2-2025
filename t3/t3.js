'use strict';

let numbers=[];


while (true) {
  let input = prompt('Enter a number (or "done" to finish):');


  if (input === null || input.toLowerCase() === 'done') {
    break;
  }

  let num = Number(input);

  if (!isNaN(num)) {
    numbers.push(num);
  }

}

let evens = [];

for (let n of numbers) {
  if (n % 2 === 0) {
    evens.push(n);
  }
}

if (evens.length > 0) {
  console.log("Even Numbers: " + evens.join(", "));
} else {
  console.log("Even Numbers: None");
}

console.log("End of program");
