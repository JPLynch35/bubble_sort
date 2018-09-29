function bSort(arr) {
  const len = arr.length;
  for (var i = len - 1; i >= 0; i--){
    for (var k = 1; k <= i; k++){
      if (arr[k - 1] > arr[k]) {
        let temp = arr[k - 1];
        arr[k - 1] = arr[k];
        arr[k] = temp;
      }
    }
  }
  return arr;
}

module.exports = bSort
