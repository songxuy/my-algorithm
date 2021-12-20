const insertSort = (arr) => {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    let nowVal = arr[i], preIndex = i - 1;
    while (preIndex >= 0 && arr[preIndex] > nowVal) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = nowVal
  }
  return arr
}
let arr = [2, 9, 6, 7, 4, 3, 1, 7, 0, -1, -2]
console.log(insertSort(arr))