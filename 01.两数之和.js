const twoSum = (nums, target) => {
  const map = new Map()
  for(let i = 0; i < nums.length; i++) {
    const n = target - nums[i]
    if(map.has(n)) {
      return [map.get(n), i]
    }
    map.set(nums[i], i)
  }
}