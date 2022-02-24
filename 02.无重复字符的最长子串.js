const lengthOfLongestSubstring = s => {
  let up = 0
  let res = 0
  const map = new Map()
  for(let down = 0; down < s.length; down++ ) {
    if(map.has(s[down]) && map.get(s[down]) >= up) {
      left = map.get(s[down]) + 1
    }
    res = Math.max(res, down - up + 1)
    map.set(s[down], down)
  }
  return res
}