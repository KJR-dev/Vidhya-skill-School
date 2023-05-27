function checkVowel(character){
    //let tempCharacter=character.charCodeAt(0)
    
    if(character.charCodeAt(0) >= 47 && character.charCodeAt(0) <= 57 || typeof character === 'number'){
        console.log("It is number so plese enter a valid character");
        return;
    }
    if(character!="string" && character.length===1){
        if(character==="A" || character==="E" || character==="I" || character==="O" || character==="U" || character==="a" || character==="e" || character==="i" || character==="o" || character==="u"){
            console.log("It is vowel character");
        }else{
            console.log("It is consonant character");
        }
    }else{
        console.log("Please enter a valid character");
    }
}


checkVowel("a");
checkVowel("1");
checkVowel(2);
checkVowel("%$^*");
checkVowel("amjj");