/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let left = 0
  let right = 1
  while (right < nums.length) {
    if (nums[left] !== nums[right]) {
      left++
      nums[left] = nums[right]
    }
    right++
  }
  return left + 1
}

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
console.log(removeDuplicates(nums))
