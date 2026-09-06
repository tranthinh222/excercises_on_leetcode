/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const str = s.toLowerCase()
  let cleanString = ''
  for (const c of str) {
    if (
      (c <= 'z' && c >= 'a') ||
      (c <= 'Z' && c >= 'A') ||
      (c <= '9' && c >= '0')
    ) {
      cleanString += c
    }
  }
  let l = 0,
    r = cleanString.length - 1
  while (l < r) {
    if (cleanString[l] !== cleanString[r]) return false
    l++
    r--
  }

  return true
}

console.log(isPalindrome('Was it a car or a cat I saw?'))
