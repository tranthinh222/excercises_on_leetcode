var containsDuplicate = function (nums) {
  const hashMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (hashMap.has(nums[i]) == true) return true
    hashMap.set(nums[i], i)
  }

  return false
}
