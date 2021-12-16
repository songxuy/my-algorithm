const insertSort = (arr) => {
  let len = arr.length
  for (let i = 0; i < len - 1; i++) {
    let nowVal = arr[i], preIndex = i - 1;
    while (preIndex >= 0 && arr[preIndex] > nowVal) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = nowVal
  }
  return arr
}