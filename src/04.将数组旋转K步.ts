function rotate1(arr: number[], k:number): number[] {
  const length = arr.length
  if(!k || length === 0) {
    return arr
  }
  const step = Math.abs(k % length)
  for(let i = 0; i < step; i++) {
    const n = arr.pop()
    if(n) {
      arr.unshift(n)
    }
  }
  return arr
}