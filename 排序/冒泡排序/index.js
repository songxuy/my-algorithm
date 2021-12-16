let bubbleSort = (arr) => {
  let len = arr.length
  let flag = false
  for (let i = 0; i < len - 1; i++) {
    flag = false
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        flag = true;
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
    if (!flag) {
      break;
    }
  }
  return arr
}
let arr = [2, 9, 6, 7, 4, 3, 1, 7]
console.log(bubbleSort(arr))