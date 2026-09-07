/**
 * @param {string} s
 * @return {boolean}
 */

// Approach 1: Two pointers
// var isPalindrome = function (s) {
//   const str = s.toLowerCase()
//   let cleanString = ''
//   for (const c of str) {
//     if (
//       (c <= 'z' && c >= 'a') ||
//       (c <= 'Z' && c >= 'A') ||
//       (c <= '9' && c >= '0')
//     ) {
//       cleanString += c
//     }
//   }
//   let l = 0,
//     r = cleanString.length - 1
//   while (l < r) {
//     if (cleanString[l] !== cleanString[r]) return false
//     l++
//     r--
//   }

//   return true
// }

// Approach 2: reverse string
var isPalindrome = function (s) {
  let newStr = ''
  for (const c of s) {
    if (
      (c >= 'a' && c <= 'z') ||
      (c >= 'A' && c <= 'Z') ||
      (c >= '0' && c <= '9')
    ) {
      newStr += c
    }
  }

  return newStr === newStr.split('').reverse().join('')
}

console.log(isPalindrome(':::'))
