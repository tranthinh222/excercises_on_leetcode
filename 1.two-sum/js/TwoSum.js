var twoSum = function (nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i]) == true) return [map.get(target - nums[i]), i]
    map.set(nums[i], i)
  }

  return []
}
