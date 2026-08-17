/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// way 1: sort
// var groupAnagrams = function (strs) {
//   const res = []
//   for (let i = 0; i < strs.length; i++) {
//     const sortS = strs[i].split('').sort().join()
//     if (!res[sortS]) {
//       res[sortS] = []
//     }
//     res[sortS].push(strs[i])
//   }

//   return Object.values(res)
// }

// way 2: Hash table
var groupAnagrams = function (strs) {
  const res = []
  for (let i = 0; i < strs.length; i++) {
    const arr = new Array(26).fill(0)
    for (const c of strs[i]) {
      arr[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
    }

    const key = arr.join(',')
    console.log(key)
    if (!res[key]) res[key] = []
    res[key].push(strs[i])
  }

  return Object.values(res)
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
