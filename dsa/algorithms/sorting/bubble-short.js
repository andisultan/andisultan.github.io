/**
 * Bubble Sort
 * Yaitu metode pengurutan dengan cara melakukan penukaran data secara terus menerus sampai bisa dipastikan dalam suatu iterasi tertentu tidak ada lagi perubahan/penukaran.
 * 
 * Langkah-langkah:
 * 1. Bandingkan data pertama dengan data kedua
 * 2. Jika data pertama lebih besar dari data kedua, tukar posisinya
 * 3. Ulangi langkah 1 dan 2 sampai data terakhir
 * 
 * Big O Notation:
 * - Best case: O(n)
 * - Average case: O(n^2)
 * - Worst case: O(n^2)
 */

function bubbleSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      if(arr[j] > arr[j+1]) {
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr
}

bubbleSort([5, 3, 1, 4, 2]) // [1, 2, 3, 4, 5]
bubbleSort([5, 3, 1, 4, 2, 6]) // [1, 2, 3, 4, 5, 6]