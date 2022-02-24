const a = {val: 'a'}
const b = {val: 'b'}
function inToRoman(num) {
  const valueIndex = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ]
  const roman = []

  for(const [val, index] of valueIndex) {
    while(num >= val) {
      num -= val
      roman.push(index)
    }
    if(num === 0) {
      break
    }
  }
  return roman.join('')
}

const res = inToRoman(3120)
console.log(res)