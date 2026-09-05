class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    const tmp = strs.join(',')
    return tmp
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    const strs = str.split(',')
    return strs
  }
}

const solution = new Solution()
const strs = ['Hello', 'World']
const encoded_string = solution.encode(strs)

// Machine 1 ---encoded_string---> Machine 2

const decoded_strs = solution.decode(encoded_string)
console.log(encoded_string)
console.log(decoded_strs)
