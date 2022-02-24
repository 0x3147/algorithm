function isMatch(left: string, right: string): boolean {
  if(left === '{' && right === '}') return true
  if(left === '[' && right === ']') return true
  if(left === '(' && right === ')') return true
  return false
}

function matchBracket(str: string): boolean {
  const length = str.length
  if(length === 0) {
    return true
  }

  const stack = []

  const left = '{[('
  const right = ')]}'

  for(let i = 0; i < str.length; i++) {
    const res = str[i]
    if(left.includes(res)) {
      stack.push(res)
    } else if(right.includes(res)) {
      const top = stack[stack.length - 1]
      if(isMatch(res, top)) {
        stack.pop()
      }else {
        return false
      }
    }
  }
  return stack.length === 0
}