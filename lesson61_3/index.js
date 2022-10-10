function deepCount(a) {
  let count = 0;

  goArr(a);

  function goArr(arr) {
    arr.forEach((element) => {
      if (Array.isArray(element)) {
        console.log('el is ar');
        goArr(element);
      }
      count++;
    });
  }

  return count;
}

console.log(deepCount([1, 2, 3, 4, [5, 6, 7]]));
