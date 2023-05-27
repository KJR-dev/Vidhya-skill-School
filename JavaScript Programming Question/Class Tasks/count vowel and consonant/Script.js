function countVowelConsonant(data) {
  //let tempdata=data.charCodeAt(0)
  let vowel = 0;
  let consonant = 0;

  for (let index = 0; index < data.length; index++) {
    if (
      (data.charCodeAt(index) >= 65 && data.charCodeAt(index) <= 90) ||
      (data.charCodeAt(index) >= 97 && data.charCodeAt(index) <= 122)
    ) {
      if (
        data[index] === "A" ||
        data[index] === "E" ||
        data[index] === "I" ||
        data[index] === "O" ||
        data[index] === "U" ||
        data[index] === "a" ||
        data[index] === "e" ||
        data[index] === "i" ||
        data[index] === "o" ||
        data[index] === "u"
      )
        vowel++;
      else consonant++;
    }
  }
  console.log("No of vowel =" + vowel);
  console.log("No of consonant =" + consonant);
}
countVowelConsonant("a");
countVowelConsonant("1");
countVowelConsonant(2);
countVowelConsonant("%$^*");
countVowelConsonant("amjj");
countVowelConsonant("Jitendra Sahoo");

