const sum = (a,b)=>{
    return a+b
}

const subtract = (a,b)=>{
    return a-b
}

const multiply = (a,b)=>{
    return a*b
}

const divide = (a,b)=>{
    return a/b
}

function factorial(n){
    
    // checking if number is negative
    if (n < 0) {
       throw new Error('Error! Factorial for negative number does not exist.');
    }

    // if number is 0
    if (n === 0) {
        return 1;
    }

    // if number is positive
    return n*factorial(n-1);
}

module.exports={
    sum, subtract, multiply, divide, factorial
}