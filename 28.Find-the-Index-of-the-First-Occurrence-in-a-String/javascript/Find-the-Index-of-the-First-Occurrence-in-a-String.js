var strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let tmp = haystack.slice(i, needle.length + i)
      console.log(tmp)
      if (tmp === needle) return i
    }
  }
  return -1
}

console.log(strStr('hello', 'll'))
