/**
 * Chuyển đổi chuỗi thành dạng capitalize (chỉ viết hoa chữ cái đầu tiên)
 *
 * Lưu ý: Loại bỏ khoảng trắng ở 2 đầu nếu có
 *
 * Ví dụ: `capitalize("  javascript is Fun ") => "Javascript is fun"`
 *
 * @param {string} str - Chuỗi bất kỳ
 *
 * @returns {string} Chuỗi viết hoa chữ cái đầu
 */
 function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
 }
  console.log(capitalize("huu phi"));

 /**
  * Chuyển đổi chuỗi thành dạng title (viết hoa chữ cái đầu của mỗi từ)
  *
  * Lưu ý: Loại bỏ khoảng trắng ở 2 đầu nếu có
  *
  * Ví dụ: `title("javaScript iS fUn") => "Javascript Is Fun"`
  *
  * @param {string} str Chuỗi bất kỳ
  *
  * @returns {string} Chuỗi viết hoa chữ cái đầu mỗi từ
  */
 function title(str) {
    let sentence = str.toLowerCase().split(" "); 
    for(let i = 0; i< sentence.length; i++){
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
     }
     return sentence.join(" ");
    }
 console.log(title("huu phi he hi"))
 /**
  * Đếm số ký tự nguyên âm xuất hiện trong chuỗi
  *
  * @param {string} str - Chuỗi bất kỳ
  *
  * @returns {number} Số ký tự nguyên âm có trong chuỗi
  */
 function countVowel(str) {  
  let sum = 0; 
 }
console.log(countVowel("le huu phi"))

 


 
 /**
  * Tạo một mã màu ngẫu nhiên (hệ màu HEX)
  *
  * @return {string} Màu ngẫu nhiên
  */
 function randomColor() {
    let hexCol = '#'; (6)
    for(let i = 0; i < 6; i++) { (7)
        let random = Math.floor(Math.random()*hexNumbers.length); (8)
        hexCol += hexNumbers[random]; (9)
    }
 }
 
 /**
  * Đảo ngược thứ tự các từ trong chuỗi
  *
  * Ví dụ: `reverseWords("The fox is comming for the chicken") => "chicken the for comming is fox The"`
  *
  * @param {string} str - Chuỗi bất kỳ
  *
  * @returns {string} Chuỗi đảo ngược
  */
 function reverseWords(str) {
   /*  let rever = str.split("");
    l_rever = rever.reverse();
     */
    let rever = str.split('').reverse().toString();
    return rever
 }
 console.log(reverseWords(" lehuuphi"));
 /**
  * Tạo chuỗi URL (viết thường, các từ được nối với nhau bằng dấu -)
  *
  * Ví dụ: `parameterize("JavaScript is fun") => "javascript-is-fun"`
  * @param {string} str Chuỗi bất kỳ
  *
  * @returns {string} Chuỗi URL
  */
 function parameterize(str){
     const x = str.split('-');
     return x;
 }
 console.log(parameterize('JavaScript is fun'))