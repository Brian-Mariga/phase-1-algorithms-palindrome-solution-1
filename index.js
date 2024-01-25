function reverseString(word) {
  /*const array = word.split("");
  const reversedArray = array.reverse();
  const reversedWord = reversedArray.join("");
  return reversedWord;*/
  return word.split("").reverse("").join("");
}

function isPalindrome(word) {
  // Write your algorithm here
  /*if (word === reversedWord) {
    return true;
  } else {
    return false;
  }*/
  const reversedWord = reverseString(word);
  return word === reversedWord;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
