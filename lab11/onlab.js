/*
/**
 * Tìm số lớn nhất trong 2 số
 *
 * @param {number} a Số thứ 1
 * @param {number} b Số thứ 2
 *
 * @return {number} Số lớn nhất
 */
 function maxOfTwo(a, b) {
    if(a >= b){
     return a
    }
     else{
     return b
    }
 }
  console.log(maxOfTwo(2,3));
 
 /**
  * Kiểm tra một số là số chẵn hay không
  *
  * @param {number} number Số bất kỳ
  *
  * @return {boolean} Kết quả
  */
 function isEven(number) {
     if(number % 2 == 0){
         return true;
     }
     else{
         return false;
     }
 }
 console.log(isEven(5))
 /**
  * Kiểm tra một số nguyên có chia hết cho 3 và 5 hay không
  *
  * @param {number} number Số bất kỳ
  *
  * @return {boolean} Kết quả
  */
 function isDivisibleByThreeAndFive(number) {
     
 }
 
 /**
  * Tính tiền hoa hồng mà đại lý nhận được
  *
  * - Nếu totalSales <= 100 triệu thì hoa hồng nhận là 5% doanh số
  * - Nếu totalSales <= 300 triệu thì hoa hồng nhận là 10% doanh số
  * - Nếu totalSales > 300 triệu thì hoa hồng nhận là 20% doanh số
  *
  *
  * @param {number} totalSalse Doanh số bán hàng
  *
  * @return {number} Hoa hồng trả cho đại lý
  */
 function calcCommissions(totalSalse) {}
 
 /**
  * Kiểm tra 1 ký tự có phải thuộc bảng chữ cái hay không (a-zA-Z)
  *
  * @param {string} character Ký tự bất kỳ
  *
  * @return {boolean} Kết quả
  */
 
 function isAlphabe(character) {
     if( character >= "a" && character <= "z");
     return true;
 }else if{
     ( character >= "A" && character <= "Z")
     return true;
 }else{
     return false;
 }
 console.log(isAlphabe("d"));
 
 /**
  * Kiểm tra 1 chữ cái bất kỳ có phải là nguyên âm hay không?
  *
  * @param {string} character Chữ cái bất kỳ
  *
  * @return {boolean} Kết quả
  */
 function isVowel(character) {
     if (character == "u" || character == "e"  || character == "o"  || character == "a" || character == "i")
     return true;
     else if{
         if (character == "U" || character == "E"  || character == "O"  || character == "A" || character == "I")
        return true
     }
     else{
         return false;
     }
 }
 console.log(character("h"));
 
 /**
  * Kiểm tra một chữ cái bất kỳ là viết hoa hay viết thường
  *
  * @param {string} character Chữ cái bất kỳ
  *
  * @return {boolean}
  */
 function isUppercase(character) {
     if( character >= "a" && character <= "z"){
         return true;
     }
     else if( character >= "A" && character <= "Z"){
            return false
     }
 }
 console.log(character("A"));

/**
 * Kiểm tra độ dài 3 cạnh bất kỳ có tạo thành một tam giác hợp lệ hay không?
 *
 * Tam giác hợp lệ là tam giác có tổng 2 cạnh bất kỳ lớn hơn cạnh còn lại
 *
 * @param {number} a Chiều dài cạnh a
 * @param {number} b Chiều dài cạnh b
 * @param {number} c Chiều dài cạnh c
 *
 * @return {boolean} Kết quả
 */
function isValidTriangle(a, b, c) {
if ( (a + b) > c || ( a + c ) > b || (b+c) > a)
    return true;
} else{
    return false;
}
console.log(isValidTriangle(2,3,4))

/**
 * Viết chương trình máy tính đơn giản
 *
 * @param {number} operand1 Toán hạng 1
 * @param {'+' | '-' | '*' | '/'} operator Toán tử
 * @param {number} operand2 Toán hạng 3
 *
 * @return {number} Kết quả phép tính
 */
function simpleCalculator(operand1, operator, operand2) {}
