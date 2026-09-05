var removeElement = function (nums, val) {
  let l = 0,
    r = 0
  while (r < nums.length) {
    if (nums[l] === val && nums[r] !== val) {
      ;[nums[l], nums[r]] = [nums[r], nums[l]]
      l++
    } else if (nums[l] !== val) l++

    r++
  }

  return l
}
const nums = [0, 1, 2, 2, 3, 0, 4, 2]
k = removeElement(nums, 2)
console.log(k)
let result = nums.slice(0, k).join(', ')
console.log(result)
