let num1='';
function inputNumber(x) {
    console.log('inputNumber');
    num1+=x;
    console.log(num1);
}


let x=prompt("Enter 1st number: ");
let op=prompt("Enter Operation +,-,*,/ or %");
let y=prompt("Enter 2nd number: ");
let result;

if(op === "+")
   result=Number(x)+Number(y);
else if(op === "-")
    result=Number(x)-Number(y);
else if(op === "*")
    result=Number(x)*Number(y);
else if(op === "/")
    result=Number(x)/Number(y);
else if(op === "%")
    result=Number(x)%Number(y);
else
    alert("Invalid operation choice");
alert('result is '+result);