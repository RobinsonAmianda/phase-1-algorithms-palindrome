function isPalindrome(word) {
  // Write your algorithm here
  let final_word = word.split("").reverse().join("")
  if(final_word === word){
    return true
  }else{
    return false
  }
}

/* 
  Add your pseudocode here
*/
word = "abba"
isPalindrome("abba")
word = "robot"
isPalindrome("robot")
word = "ab"
isPalindrome("ab")
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
