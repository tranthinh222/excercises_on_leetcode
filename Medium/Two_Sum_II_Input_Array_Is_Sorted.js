/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// Approach 1: Two pointers
// var twoSum = function (numbers, target) {
//   let l = 0,
//     r = numbers.length - 1
//   while (l < r) {
//     let sum = numbers[l] + numbers[r]
//     if (sum > target) {
//       r--
//     } else if (sum < target) l++
//     else return [l + 1, r + 1]
//   }
// }

// Approach 2: Brute force
// var twoSum = function (numbers, target) {
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = 0; j < numbers.length; j++) {
//       if (i !== j && numbers[i] + numbers[j] === target) return [i + 1, j + 1]
//     }
//   }
// }

// Approach 3: Hash map
var twoSum = function (numbers, target) {
  const map = new Map()
  for (let i = 0; i < numbers.length; i++) {
    map.set(numbers[i], i)
  }

  for (let i = 0; i < numbers.length; i++) {
    if (map.has(target - a[i]) === true)
      return [i + 1, map.get(target - a[i]) + 1]
  }
}

console.log(twoSum([2, 7, 11, 15], 9))
