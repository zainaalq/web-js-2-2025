'use strict';

let fruits = ['apple', 'banana', 'orange', 'grape','kiwi'];

console.log(fruits);
console.log('length of fruits:' +fruits.length);
console.log('Element at Index 2:' +fruits[2]);

let lastFruit = fruits[fruits.length - 1];
console.log('Last Element of Fruits:'+ lastFruit);

let vegetables = [];

for (let i = 0; i < 3; i++) {  // toistetaan 3 kertaa
  let veg = prompt(`Enter a vegetable ${i + 1}:`);  // backtick käytössä
  vegetables.push(veg);
}

console.log("Vegetables:", vegetables);
console.log("Length of Vegetables:", vegetables.length);

document.getElementById('fruits').innerText = fruits.join(', ');
