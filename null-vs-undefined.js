//How undefined can be found

let name;


/**
 * This will add two numbers but it will also provide undefined message
 * Because we didn't returned anything from the function
 */

add = (num1,num2) => {
    console.log(num1 + num2);
}

const result = add(24,6);
console.log(result);




/**
 * this will provide undefined because we tried to access a property which is not belonging to the object
 
 */
const studentDetails = {
    name: "Shrikata Mazumder",
    age: 24
}

console.log(studentDetails.phone);



