/**
 * Setiap kata diawali dengan huruf besar
 * 
 * big O notation: O(n)
 * space complexity: O(1)
 */
function capitalize(sentence) {
  let result = ''
  for(let i = 0; i < sentence.length; i++) {
    if(i === 0 || sentence[i - 1] === ' ') {
      result += sentence[i].toUpperCase()
    } else {
      result += sentence[i]
    }
  }
  return result
}

console.log(capitalize('hello world')) // Hello World
console.log(capitalize('today is friday')) // Today Is Friday