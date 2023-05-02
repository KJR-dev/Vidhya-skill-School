//To find a first pair from a number array whose sum is X

/**
 * The function finds the first pair of numbers in an array that add up to a given sum.
 * @param inputArray - [1, 2, 3, 4, 5, 6]
 * @param sum - The sum parameter is the target sum that we want to find a pair of numbers that add up
 * to it. In the example code, it is set to 4.
 * @returns The function `firstPair` returns an object with a `pairs` property that contains an array
 * of two numbers that add up to the given `sum` if such a pair exists in the `inputArray`. If no such
 * pair exists, the function returns `false`.
 */

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