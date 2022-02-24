function romanToInt(str) {
  

  let res = 0
 

  for(let i = 0; i < str.length; i++) {
    if(obj[str[i]] < obj[str[i + 1]]) {
      res -= obj[str[i]]
    }
    else {
      res += obj[str[i]]
    }
  }
  return res
}
const obj = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
}

const n = romanToInt('III')
console.log(n)