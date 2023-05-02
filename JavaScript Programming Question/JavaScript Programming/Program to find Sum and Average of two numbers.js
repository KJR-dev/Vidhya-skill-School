// Program to find Sum and Average of two numbers.

// step-1 call to function and takes 2 arguments i.e num1 and num2.
// step-2 Define the function body/definations.
// step-3 create 2 variables i.e. sum and average
// step-4 calculate sum and average
// step-5 print them i.e sum and average
function sumAndAverage(num1,num2){
    let sum=0;
    let average=0;
    sum=num1+num2;
    average=sum/2;
    console.log("sum is "+sum);
    console.log("average is "+average);
}

let num1=5;
let num2=10;
sumAndAverage(num1,num2);
