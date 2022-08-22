let arr = [1, 2, 3, 4];

function iseven(n) {
  return n % 2 == 0;
}
let result;
for (const number of arr) {
  if (iseven(number)) result = number;
  break;
}
console.log(result);

//find
const n = arr.find(iseven);
console.log(n);
//fitter tìm nhiều
const numbersss = arr.filter(iseven);
console.log();

// [1 , 2 , 3 ] => [ 2 , 4 , 9]
// vòng lặp
let pow = [];
for (const number of arr) {
  pow.push(number ** 2);
}
console.log(pow);
// map
const r = arr.map(function (n) {
  return n ** 2;
});
console.log(r);

// tính tỏng các giá trị trong mảng
// tính tông
function add(a, b) {
  return a + b;
}
let sum = 0; // giá trị tích lũy và giá trị ban đầu bằng 0

for (const number of arr) {
  sum = add(sum, number);
}
console.log(sum);

// reduce
let total = arr.reduce(add, 0);
console.log(total);
// sort() sắp xếp
// theo mặc định thì sort sắp xếp the đạng chuỗi ( so sánh từng kí tự theo bảng nếu giiosng nhau thì cái nào dài hơn thì lướn hơn )

let arrs = [1, 23, 34, 4, 3, 43, 45];
function compart(a, b) {
  return a - b;
}
arrs.sort(compart);
console.log(arrs);

let users = [
  { name: " Ba", age: 23 },
  { name: " phi", age: 30 },
  { name: " hữu", age: 20 },
  { name: " Lê", age: 10 },
];
/* users.sort(function(usuer1,usuer2){
    return usuer1.age - usuer2.age ;
});
console.log(users); */
users.sort(function (use1, use2) {
  if (use1.name > use2.name) {
    return 1;
  }
  if (use1.name < use2.name) {
    return -1;
  }
  return 0;
});
console.log(users);

/* 
// find() - Tìm giá trị theo điều kiện (tìm 1)
// findIndex() - Tìm chỉ mục của giá trị theo điều kiện (tìm 1)

// filter() - Tìm nhiều giá trị theo điều kiện (lọc)

// map() - Biến đổi mảng

// reduce() - Tổng hợp, ghép các giá trị trong mảng

// sort() - Sắp xếp các giá trị trong mảng

  */

//>4




