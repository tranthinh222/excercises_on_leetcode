/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const hashMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (hashMap.has(nums[i]) === false) {
      hashMap.set(nums[i], 1)
    } else {
      hashMap.set(nums[i], hashMap.get(nums[i]) + 1)
    }
  }

  const res = []
  while (k != 0) {
    let max = 0
    let maxKey = 0
    for (const [key, value] of hashMap) {
      if (max < value) {
        max = value
        maxKey = key
      }
    }
    res.push(maxKey)
    hashMap.delete(maxKey)
    k--
  }

  return res
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))
