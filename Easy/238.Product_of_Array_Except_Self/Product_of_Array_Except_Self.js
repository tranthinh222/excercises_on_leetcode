/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const map = new Map()
  let multi = 1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      map.set(i, true)
      continue
    }
    multi = multi * nums[i]
  }

  if (map.size > 1) return Array(nums.length).fill(0)
  const res = []
  for (let i = 0; i < nums.length; i++) {
    if (map.size === 1) {
      res.push(nums[i] === 0 ? multi : 0)
    } else res.push(multi / nums[i])
  }

  return res
}

console.log(productExceptSelf([-1, 1, 0, -3, 3]))
