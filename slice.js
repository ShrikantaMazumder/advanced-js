const numbers = [1,2,3,4,5,6,7,8,9];

// slice will print the selected items only. It won't change the main array
// const part = numbers.slice(2,5);
// console.log(part);
// console.log(numbers);

// splice will removed the selected items only and it will change the main arry also

const removed = numbers.splice(2,2);
// console.log(removed);
// console.log(numbers);

//join all the the items of an array as a string
const together = numbers.join("-");
console.log(together);