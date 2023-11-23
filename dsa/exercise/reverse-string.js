/**
 * Mengembalikan string yang dibalik
 * 
 * big O notation: O(n)
 * space complexity: O(1)
 */
function reverseString(str) {
  let result = ''
  for(let i = 0; i < str.length; i++){
    result = str[i] + result
  }
  return result
}

reverseString('Andi') // idnA
reverseString('Joni') // inoJ

// Ini cara lainnya
function reverseString2(str) {
  let result = ''
  for(let i = str.length - 1; i >= 0; i--){
    result += str[i]
  }
  return result
}

reverseString2('Andi') // idnA
reverseString2('Joni') // inoJ