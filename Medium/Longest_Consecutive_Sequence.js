/**
 * @param {number[]} nums
 * @return {number}
 */
// Method 1: Sorting
// var longestConsecutive = function (nums) {
//   nums.sort((a, b) => a - b)
//   let res = 0
//   let tmp = 0
//   for (let i = 0; i < nums.length; i++) {
//     if (i === 0) {
//       tmp++
//       res = 1
//       continue
//     }
//     if (nums[i] === nums[i - 1] + 1) tmp++
//     else if (nums[i] > nums[i - 1]) tmp = 1
//     res = Math.max(tmp, res)
//   }

//   return res
// }

// Method 2: HashSet
var longestConsecutive = function (nums) {
  let res = 0
  const setNums = new Set(nums)
  for (num of nums) {
    if (!setNums.has(num - 1)) {
      let longest = 1
      while (setNums.has(num + longest)) {
        longest++
      }
      res = Math.max(longest, res)
    }
  }
  return res
}

// Method 3: Hashmap
var longestConsecutive = function (nums) {
  let res = 0
  const map = new Map()
  for (num of nums) {
    if (map.has(num)) continue
    const left = map.get(num - 1) || 0
    const right = map.get(num + 1) || 0

    map.set(num, left + right + 1 || 1)
    map.set(num - (map.get(num - 1) || 0), map.get(num))
    map.set(num + (map.get(num + 1) || 0), map.get(num))
    console.log(`key: ${num}, val: ${map.get(num)}`)
    res = Math.max(res, map.get(num))
  }

  return res
}
const nums = [100, 1, 200, 3, 4, 2, 5]
console.log(longestConsecutive(nums))
