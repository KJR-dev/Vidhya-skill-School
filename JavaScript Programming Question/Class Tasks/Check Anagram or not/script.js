function checkAnagram(firstData, secondData) {
  let tempFirstData = firstData.toString();
  let tempSecondData = secondData.toString();
  let length=tempFirstData.length;
  if (tempFirstData.length != tempSecondData.length) {
    console.log("It's not anagram");
  }
  for (let index1 = 0; index1 < length; index1++) {
    for (let index2 = index1+1; index2 < length; index2++) {
      if (tempFirstData[index1] > tempFirstData[index2]) {
        let tempData = tempFirstData[index1];
        tempFirstData[index1] = tempFirstData[index2];
        tempFirstData[index2] = tempData;
      }
      if (tempSecondData[index1] > tempSecondData[index2]) {
        let tempData = tempFirstData[index1];
        tempSecondData[index1] = tempSecondData[index2];
        tempSecondData[index2] = tempData;
      }
    }
  }
  if (tempFirstData === tempSecondData) console.log("It's anagram");
  else console.log("It's not anagram");
}
checkAnagram(129, 321);
