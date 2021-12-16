let mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);
  let finalLeft = mergeSort(leftArr);
  let finalRight = mergeSort(rightArr);
  return merge(finalLeft, finalRight)
}
let merge = (arr1, arr2) => {
  let result = [];
  while(arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      result.push(arr1.shift())
    } else {
      result.push(arr2.shift())
    }
  } 
  while (arr1.length) {
    result.push(arr1.shift())
  }
  while (arr2.length) {
    result.push(arr2.shift())
  }
  return result
}
let arr = [2, 9, 6, 7, 4, 3, 1, 7, 0, -1, -2]
console.log(mergeSort(arr))