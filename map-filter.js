const numbers = [2,3,4,7,8];
// const output = [];

// for(let i=0; i<numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);


// const result = numbers.map(function(element){
//     return element * element;
// });
// console.log(result);


// const result = numbers.map(element => element * element);
// console.log(result);


//Filter


// const number2 = [15,4,45,1,32,12];
// const bigger = number2.filter(element => element >5);
// console.log(bigger);


//Find


const findNumber = numbers.find(x => x>5);
console.log(findNumber);