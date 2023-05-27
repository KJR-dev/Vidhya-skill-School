function nAdd(){
   let sum=0;
    let temp=0;
    for (let index = 0; index < arguments.length; index++) {
        if(typeof arguments[index] === "number" && arguments[index] > 0) {
            sum=sum+arguments[index];
        }
        if(typeof arguments[index] =='string'){
            temp = parseInt(arguments[index])
            if (temp >= 0) {
                sum=sum+temp;
            }
        }
    }
    return sum;
}
console.log(nAdd(100, 490, "ankit", 50, null, 490, "30", 50, "", false));
console.log(nAdd(100, 490, 'ankit', 50, null, 490, '30', 50, '', false, NaN));