function add(){
    let numbers = [...arguments];
    let sum = 0;
    numbers.map(x => sum+=x);;
    return sum;  
}
const result = add(2,3,5,20);
console.log(result);