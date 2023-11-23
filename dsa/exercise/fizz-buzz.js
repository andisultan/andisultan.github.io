/**
 * Jika angka habis dibagi 3, maka tampilkan 'Fizz'
 * Jika angka habis dibagi 5, maka tampilkan 'Buzz'
 * Jika angka habis dibagi 3 dan 5, maka tampilkan 'FizzBuzz'
 * 
 * big O notation: O(1)
 * space complexity: O(1)
 */
function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz'
  }
  if (num % 3 === 0) {
    return 'Fizz'
  }
  if (num % 5 === 0) {
    return 'Buzz'
  }
  return num
}