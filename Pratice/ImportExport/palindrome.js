function palindrome1(inputString) {
    let isPalindrome = "";
    for (let index = (inputString.length)-1; index >= 0; index--) {
        isPalindrome =isPalindrome + inputString[index];
    }
    if (isPalindrome === inputString) {
        console.log(isPalindrome);
    }
}
function palindrome2(inputString) {
    let isPalindrome = true;
    for (let index = 0; index <= inputString.length/2; index++) {
        if (inputString[index] !== inputString[inputString.length-index] ) 
        break;
    }
    if(isPalindrome===true)
        console.log("palindrome");
    else
        console.log("not palindrome");

}
function palindrome2(inputString) {
    let isPalindrome = true;
    for (let index = 0; index <= inputString.length/2; index++) {
        if (inputString[index] !== inputString[inputString.length-index] ) 
        break;
    }
    if(isPalindrome===true)
        console.log("palindrome");
    else
        console.log("not palindrome");

}
palindrome1("MOM")
palindrome2("DOD")