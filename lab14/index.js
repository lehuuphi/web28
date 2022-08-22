let arr = ["Linh", "Nhi", "Hùng", "Hà", "Mai Anh"];

// In arr ra console
 console.log(arr);
// In ra độ dài (số lượng phần tử) của arr
  arr.length
// In ra phần tử thứ 3 trong mảng
 console.log(arr[2])
// In ra phần tử đầu tiên trong mảng
 console.log(arr[0])
// In ra phần tử cuối cùng của mảng
console.log(arr[arr.length - 1] )
// In ra phần tử có index = -1, chú ý kết quả
 console.log(arr[100]);
// Sử dụng vòng lặp in ra từng giá trị trong arr
for (const element of arr) {
    console.log(element);
}
// Sử dụng vòng lặp in ra giá trị và chỉ mục tương ứng của giá trị đó trong arr
// Ví dụ:
// Index: 0, Value: 10
// Index: 1, Value: 20
// ...
    for(let i=0 ; i < arr.length ; i++) {
        let element = arr[i];
        console.log(arr[i]), element;
    }
// Sử dụng vòng lặp in ra giá trị và chỉ mục tương ứng trong arr theo chiều ngược lại (từ cuối mảng)
      
// Thêm "Ba"  cuối mảng sử dụng phương thức push()
 arr.push("ba")
 console.log(arr)
// Thêm "Thảo" vào cuối mảng mà KHÔNG SỬ DỤNG phương thức push()
 arr[arr.length]="thảo"
 console.log(arr)
// Thêm "Béo Ú" vào vị trí đầu tiên trong mảng sử dụng phương thức unshift()
 arr.unshift("Béo Ú")
 console.log(arr)
// Xóa phần tử ở vị trí cuối cùng của mảng sử dụng phương thức pop() và in ra giá trị đó
    const delet = arr.pop();
    console.log(delet)
// Xóa phần tử ở vị trí đầu tiên trong mảng sử dụng phương thức shift() va in ra giá trị đó
    const delefrist = arr.shift();
    console.log(delefrist)
// Sao chép 2 phần tử đầu tiên sử dụng phương thức slice() và in ra kết quả
     const copy = arr.slice(0 , 2)
     console.log(copy)
// Sao chép toàn bộ phần tử của mảng sử dụng phương thức slice()
const copyall= arr.slice(0 , 5)
console.log(copyall)
// Sao chép 3 phần tử cuối cùng của mảng sử dụng phương thức slice()
const copythree = arr.slice( 2,5)
console.log(copythree); 
// Xóa 2 phần tử thứ 2 và 3 ("Nhi" và "Hùng") khỏi mảng sử dụng phương thức splice()
const deletwo = arr.splice(1,2);
console.log(deletwo)
console.log(arr)
// Thêm lại "Nhi" và "Hùng" vào vị trí thứ 2 và 3 sử dụng phương thức splice()
  const add = arr.splice(1,0,"nhi" , "hùng")
  console.log(arr)
// Tìm và in ra chỉ mục của "Ba" ra console sử dụng phương thức indexOf()
 console.log(arr.indexOf("ba"));
// Tìm và in ra chỉ mục của "Thảo" ra console, chú ý kết quả

// Kiểm tra "Mai Anh" có trong mảng arr hay không sử dụng phương thức includes() và in ra kết quả
 console.log(arr.includes(4))
// Sử dụng alert() in arr, chú ý kết quả
    
// Nối các tên trong mảng thành một chuỗi sử dụng phương thức join() và in ra console
   console.log(arr.join())
// Đảo ngược các giá trị trong mảng arr sử dụng phương thức reverse() và in ra kết quả
       let reve = arr.reverse()
       console.log(arr)
// Đổi chỗ 2 phần tử đầu và cuối mảng
        let temp = arr[0]
          arr[0] = arr.[arr.length-1]
          arr.[arr.length-1] = temp
// Xóa toàn bộ phần tử trong mảng
   arr.splice(0,arr.[arr.length-1])
   console.log(arr)
/**
 * Tính tổng các số trong một mảng
 *
 * @param {number[]} numbers Mảng các số
 *
 * @return {number} Tổng các số trong mảng
 */
function sum(numbers) {
    
}

/**
 * Tính trung bình cộng các số trong mảng
 *
 * @param {number[]} numbers Mảng các số
 *
 * @return {number} Trung bình cộng các số trong mảng
 */
function avg(numbers) {}
