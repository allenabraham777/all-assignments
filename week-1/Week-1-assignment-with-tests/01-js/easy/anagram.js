/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if(str1.length != str2.length) return false;
  const letterMap = {};
  for(const letter of str1) {
    const key = letter.toLowerCase();
    letterMap[key] = letterMap[key] + 1 || 1;
  };
  for(const letter of str2) {
    const key = letter.toLowerCase();
    if(!letterMap[key]) {
      return false;
    }
  };
  return true;
}

module.exports = isAnagram;
