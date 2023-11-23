function removeDuplicate(arr) {
  // buat variabel result
  let result = []
  // lakukan perulangan sebanyak arr.length
  for(let i = 0; i < arr.length; i++) {
    // jika result tidak mengandung arr[i]
    if(result.indexOf(arr[i]) == -1) {
      // tambahkan arr[i] ke result
      result.push(arr[i])
    }
  }
  // kembalikan result
  return result
}

removeDuplicate([1,4,3,1,3])
removeDuplicate(["satu", "dua", "tiga", "dua", "satu"])