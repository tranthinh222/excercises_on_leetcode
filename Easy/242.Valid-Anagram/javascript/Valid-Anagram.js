/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length != t.length) return false

  let str1 = convertToHashMap(s)
  let str2 = convertToHashMap(t)
  console.log(str1)
  console.log(str2)
  for (const [key, value] of str1) {
    if (str2.has(key) != true || str2.get(key) != value) return false
  }
  return true
}

var convertToHashMap = (s) => {
  let res = new Map()
  for (const c of s) {
    if (res.has(c) == true) {
      res.set(c, res.get(c) + 1)
    } else res.set(c, 1)
  }

  return res
}

console.log(isAnagram('anagram', 'nagaram'))
