'use strict';

function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}


let numbers = [5, 3, 8, 1, 2];

console.log('Original array:', numbers);
console.log('Sorted array:', sortArray(numbers));

document.querySelector('# target').innerHTML = 'Sorted array: ' + sortArray(numbers);
