let number = [
    10,
    20,
    30,
    40,
    50,
]
console.log(typeof number);
console.log(number.length);

console.log(number)

for(let i=0 ; i < number.length ; i++){
    console.log(number[i]);
}

for (const numbers of number) {
    console.log(number)
}

// kiểm tra có phải mảng không
Array.isArray(number);
// nối 2 mảng 
const newArray = number.concat(["huu" , " phi"]);
 console.log(newArray);
 // tìm vị trí chỉ mục của 1 giá trị trong mảng 
 // tìm theo thứ tự từ trái sang phải 
 console.log(number.indexOf(20));
 // kiểm tra có nằm trong mảng hay k 
 console.log(number.includes(20)) 
 //them vào cuosi 
 number.push(1,2,4)
 console.log(number);
 // thêm vào đầu mảng 
 number.unshift(-2,-8)
 // xóa phần tử ở cuối 
 const lastitem =  number.pop();
 console.log(lastitem);
 console.log(number)
 // xá phần tử ở đầu
 const firs = number.shift();
 console.log(firs);
 // đảo ngược thứ tự 
 number.reverse()
 console.log(number);
 // sao chép mảng 
 const firtsthreeitem = number.slice(0 , 3);
 console.log(firtsthreeitem)
 // xóa học chèn các giá trị ở vị trí bất kì 
 // splice nhận vào tham số ( start , number , item)
 number.splice(2, 1);
 console.log(number);


 //thay thế
 number.splice(2,0,5,6)
 
 // 1 hàm được truyền vào 1 hàm khác dưới dạng đối số
 let arr=[1,2,3,4,5];
 function square(n){
    console.log(n ** 2);
 }
 arr.forEach(square);

 
 
 arr.forEach(function(n){
    console.log(n**2);
 })

 // hầu hết các phương thức đều tryền cho callback 3 giá trị value index array