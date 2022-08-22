// bài 1
function volume(r) {
  let PI = 3.14159;
  return (4 / 3) * PI * r * r * r;
}
console.log(volume(2));
// bài 2
function sum(a, b) {
  let sumif = 0;
  if (a > b) {
    return false;
  } else {
    for (let i = a + 1; i < b; i++) {
      sumif += i;
    }
  }
  return sumif;
}
console.log(sum(3, 8));
console.log(sum(9, 5));
// bài 3
function divisor(number) {
  let sum = 0;
  for (let i = 0; i <= number; i++)
    if (number % i == 0) {
      sum += i;
    }
  return sum;
}

// bài 4

function isPrime(num) {
  let flag = true;
  if(num <1){
    flag = false
  }
  if (num === 2) {
    flag =  true;
  } else if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        flag = false;
        break;
      } 
    }
  } 
  return flag
}
console.log(isPrime(7))
console.log(isPrime(10))

// bai 5
function sumPrime(number) {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumPrime(10));
