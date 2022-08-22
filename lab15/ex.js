//reges - regular expression
/* 
 các giá trị tháng tính từ 0 -11
  giờ tính từ  0 -23 
  thứ trong tuần tính từ  0 đến thứ 6 
  bắt đầu từ thời điển 1970-01-01 00:00:0000 
  get( lấy ra) set ( lấy )
  khi cập nnhaajt thay đổi thời gian phần giá trị bị dư ( thiếu ) tự động bù trừ những phần khác 
  */

/* 
 
*/

function titleCase(string) {
  //1. Tách các từ, cụm từ trong chuỗi ban đầu
  let sentence = string.toLowerCase().split(" ");

  //2. Tạo vòng lặp và viết hoa chữ cái đầu tiên của các từ, cụm từ trên
  for(var i = 0; i< sentence.length; i++){
     sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
  //3. Nối các từ, cụm từ đã xử lý ở trên và trả về kết quả
  return sentence.join(" ");
}

let result = titleCase('hà nội việt nam');
console.log(result)