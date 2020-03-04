const numbers = [1,2,3,4,5,6,7,8,9,10];

for(let i=1; i<=numbers.length; i++){   
    if(i == 5){
        continue;
    }
    if (i == 7) {
        break;
    }
    console.log(i);
}
