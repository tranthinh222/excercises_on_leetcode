var isPalindrome = function (x) {
  if (x < 0) return false
  let tmp = String(x)
  for (let i = 0; i < tmp.length; i++) {
    if (tmp[i] != tmp[tmp.length - 1 - i]) return false
  }

  return true
}

console.log(isPalindrome(9))
