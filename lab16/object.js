// bai 1
function studen(arr) {
  const sum = arr?.reduce((start, item) => {
    return start + item.age;
  }, 0);
  return sum / arr.length;
}
console.log(
  studen([
    { name: "huu", age: 18 },
    { name: "phi", age: 20 },
  ])
);
