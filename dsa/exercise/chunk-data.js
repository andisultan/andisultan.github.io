/**
 * Chunk data
 * 
 * Langkah-langkah:
 * 1. Buatlah array kosong
 * 2. Looping array
 * 3. Jika index array habis dibagi dengan ukuran chunk
 * 4. Maka buat array baru
 * 5. Masukkan data ke array baru
 * 6. Masukkan array baru ke array kosong
 * 7. Kembalikan array kosong
 * 
 */
function chunk(arr, size) {
  let result = []
  for(let i = 0; i < arr.length; i++) {
    if(i % size == 0) {
      let newArr = []
      for(let j = 0; j < size; j++) {
        if(arr[i+j] != undefined) newArr.push(arr[i+j])
      }
      result.push(newArr)
    }
  }
  return result
  
}

chunk([1,2,3,4,5,6,7,8,9,10], 2) // [[1,2], [3,4], [5,6], [7,8], [9,10]]