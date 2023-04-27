//To find a first pair from a number array whose sum is X

function firstPair(inputArray,sum){
    for (let index1 = 0; index1 < inputArray.length-1; index1++) {
        for (let index2 = index1+1; index2 < inputArray.length; index2++) {
            if(inputArray[index1]+inputArray[index2]===sum){
                return {
                    pairs:[inputArray[index1],inputArray[index2]]
                }
            }
        }
    }
    return false;
}

let inputArray=[1,2,3,4,5,6]
let checkNumber=4;
let pair=firstPair(inputArray,checkNumber);
console.log(pair);