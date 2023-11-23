/**
 * AnaGram
 * Yaitu sebuah kata yang apabila dibolak-balik tetap sama
 * Contoh: malam, kasur rusak, makan nasi, dan lain-lain
 * 
 * Buatlah sebuah function yang menerima sebuah string
 * dan mengembalikan true jika string tersebut adalah anagram
 * dan false jika bukan
 * 
 * Contoh:
 * anagram('malam') // true
 * anagram('kasur rusak') // true
 * anagram('makan nasi') // false
 * anagram('gigi') // false
 */

function anagram(str) {
  let temp = ''
  for(let i = 0; i < str.length; i++) {
    temp = str[i] + temp
  }
  return temp === str
}
