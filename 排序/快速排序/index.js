const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let midVal = arr.splice(mid, 1)[0];
  let leftArr = [], rightArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > midVal) {
      rightArr.push(arr[i])
    } else {
      leftArr.push(arr[i])
    }
  }
  return quickSort(leftArr).concat([midVal], quickSort(rightArr))
}
let arr = [2, 9, 6, 7, 4, 3, 1, 7]
console.log(quickSort(arr))