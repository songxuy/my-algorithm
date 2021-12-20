const selectSort = (arr) => {
  const len = arr.length
  for (let i = 0; i < len - 1; i++) {
    let temp = i;
    for (let k = i + 1; k < len; k++) {
      if (arr[k] < arr[temp]) {
        temp = k
      }
    }
    if (temp !== i) {
      [arr[i], arr[temp]] = [arr[temp], arr[i]]
    }
  }
  return arr
}
let arr = [2, 9, 6, 7, 4, 3, 1, 7, 0, -1, -2]
console.log(selectSort(arr, 1))