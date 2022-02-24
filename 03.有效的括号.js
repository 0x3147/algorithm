const isValid = s => {
  const stack = []
  const map = new Map(
    [
      ['(', ')'],
      ['{', '}'],
      ['[', ']']
    ]
  )
  for(let n of s) {
    if(n in map) {
      stack.push(n)
      continue
    }
    if(map[stack.pop()] !== n) {
      return false
    }
  }
  return !stack.length
}