class Stack {
  constructor() {
    this.items = []
  }
  push(el) {
    this.items.push(el)
  }
  pop() {
    return this.items.pop()
  }
  size() {
    return this.items.length
  }
}

var isValid = (s) => {
  const map = new Map()
  map.set(')', '(')
  map.set(']', '[')
  map.set('}', '{')
  const stack = new Stack()
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      if (map.get(s[i]) !== stack.pop()) return false
    } else {
      stack.push(s[i])
    }
  }
  return stack.size() === 0
}

console.log(isValid(']'))
