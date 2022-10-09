function isPangram(string) {
  let strArr = string.replaceAll(' ', '').toLowerCase().split('');
  //   console.log(strArr);

  let set = new Set(strArr);

  return set.size == 26;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'));
console.log(isPangram('asdkdsjflkdsjf'));
