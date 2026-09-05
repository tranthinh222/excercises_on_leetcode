const { MinPriorityQueue } = require('@datastructures-js/priority-queue')

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // How I did
  // const hashMap = new Map()
  // for (let i = 0; i < nums.length; i++) {
  //   if (hashMap.has(nums[i]) === false) {
  //     hashMap.set(nums[i], 1)
  //   } else {
  //     hashMap.set(nums[i], hashMap.get(nums[i]) + 1)
  //   }
  // }

  // const res = []
  // while (k != 0) {
  //   let max = 0
  //   let maxKey = 0
  //   for (const [key, value] of hashMap) {
  //     if (max < value) {
  //       max = value
  //       maxKey = key
  //     }
  //   }
  //   res.push(maxKey)
  //   hashMap.delete(maxKey)
  //   k--
  // }

  // return res

  // Sorting
  // const hashMap = {}
  // for (let i = 0; i < nums.length; i++) {
  //   if (!hashMap[nums[i]]) hashMap[nums[i]] = 0
  //   hashMap[nums[i]]++
  // }

  // const arr = Object.entries(hashMap).map(([value, frequency]) => {
  //   return [frequency, parseInt(value)]
  // })
  // arr.sort((a, b) => b[0] - a[0])
  // return arr.slice(0, k).map((pair) => pair[1])

  // Min Heap
  const count = {}
  for (const n of nums) {
    count[n] = (count[n] || 0) + 1
  }

  const heap = new MinPriorityQueue((x) => x[1])
  for (const [val, cnt] of Object.entries(count)) {
    heap.enqueue([val, cnt])
    if (heap.size() > k) heap.dequeue()
  }

  const res = []
  for (const [val, cnt] of heap) res.push(parseInt(val))

  console.log(res)
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))
