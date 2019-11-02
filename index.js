import fs from 'fs'
//Cesta musi byt tak aby to fungovalo ked spustame transpilovany subor Babelom z "./lib/index.js"
const textInput = fs.readFileSync('../dataInput.txt', 'utf8')
  .trim()
  .split(' ')
  .map(e => Number(e))
  
// const hardInput = [-1,3,-4,5,1,-6,2,1]
// const hardInput = [0, -2147483648, -2147483648]

const solution = (array = textInput, length) => {
  let prevs = [] //Sum of elements on the left from the current value
  let sum = array.reduce((prev, curr) => {
    prevs.push(prev);
    return prev + curr;
  }, 0); 
  
  let result = array.map((current, i) => {
    let sum_do = prevs[i]
    let sum_po = sum - sum_do - current
    if(sum_do - sum_po === 0) return i
  }).filter(x => x !== undefined)
  return result.length === 0 ? -1 : result
};

fs.writeFileSync('../dataOutput.txt', JSON.stringify(solution().toString()))
console.log("Result has been written to dataOutput.txt")
