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
//Here,we first create a function and pass the parameter to be word
//For us to know if a word is palindrome,this is what we do:
//   1.We split the word
//   2..We reverse the word
//   3.We join the word.
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
