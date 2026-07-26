var longestCommonPrefix = function (strs) {
  let res = ''
  for (let i = 0; i < strs.length; i++) {
    if (i === 0) {
      res = strs[i]
      continue
    }
    let length = Math.min(strs[i].length, res.length)
    let j = 0
    while (j < length && res[j] === strs[i][j]) j++
    res = res.slice(0, j)
  }
  return res
}
let strs = ['flower', 'flow', 'flight']
console.log(longestCommonPrefix(strs))
