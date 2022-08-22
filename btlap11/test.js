function getRandNumbers (min, max, length) {
  let array=[length]
  for (var i = 0; i < length; i++) {
      array[i] = Math.random() * (max - min) + min
  }
  return array
}
console.log(getRandNumbers(2,3,4))