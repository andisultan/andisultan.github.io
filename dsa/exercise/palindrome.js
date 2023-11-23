/**
 * Palindrome
 * Yaitu sebuah kata yang apabila dibolak-balik tetap sama
 * 
 * Buatlah sebuah function yang menerima sebuah string
 * dan mengembalikan true jika string tersebut adalah palindrome
 * dan false jika bukan
 * 
 * Contoh:
 * palindrome('madam') // true
 * palindrome('aduy') // false
 * 
 * 
 * Big O Notation:
 * - Best case: O(n)
 * - Average case: O(n)
 * - Worst case: O(n)
 */
function palindrome(str) {
  let temp = ''
  for(let i = 0; i < str.length; i++) {
    temp = str[i] + temp
  }
  return temp === str
}

palindrome('madam') // true
palindrome('aduy') // false