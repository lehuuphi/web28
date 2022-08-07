/**
 * Tính chu vi hình chữ nhật
 *
 * @param {number} length Chiều dài hình chữ nhật
 * @param {number} breadth Chiều rộng hình chữ nhật
 *
 * @return {number} Chu vi hình chữ nhật
 */
function findPerimeterOfRectangle(length, breadth) {
  return (length + breadth) * 2;
}
console.log(
  " chu vi hình chữ nhật length = 5 breadth=3 là" +
    findPerimeterOfRectangle(5, 3)
);

/**
 * Tính diện tích hình chữ nhật
 *
 * @param {number} length Chiều dài hình chữ nhật
 * @param {number} breadth Chiều rộng hình chữ nhật
 *
 * @return {number} Diện tích hình chữ nhật
 */
function findAreaOfRectangle(length, breadth) {
  return length * breadth;
}
console.log(
  " Diện tích hình chữ nhật length = 5 ,breadth=3 là " +
    findAreaOfRectangle(5, 3)
);

/**
 * Tìm đường kính hình tròn
 *
 * @param {number} r Bán hình hình tròn
 *
 * @return {number} Đường kính hình tròn
 */
function findDiameterOfCircle(r) {
  return r * 2;
}
console.log(" đường kính hình tròn r = 6 là " + findDiameterOfCircle(6));

/**
 * Tìm chu vi hình tròn
 *
 * Quy ước PI = 3.14
 *
 * @param {number} r Bán hình hình tròn
 *
 * @return {number} Chu vi hình tròn
 */
function findCircumferenceOfCircle(r) {
  return 2 * r * 3.14;
}
console.log(" chu vi hình tròn r = 3 là " + findCircumferenceOfCircle(3));

/**
 * Tìm diện tích hình tròn
 *
 * Quy ước PI = 3.14
 *
 * Bình phương sử dụng toán tử ** hoặc Math.pow()
 *
 * @param {number} r Bán kính hình tròn
 *
 * @return {number} Diện tích hình tròn
 */
function findAreaOfCircle(r) {
  return r ** r * 3.14;
}
console.log(" diện tích hình tròn r = 2 là " + findAreaOfCircle(2));

/**
 * Tính diện tích hình tam giác theo công thức Heron
 *
 * Link tham khảo công thức Heron: https://vi.wikipedia.org/wiki/C%C3%B4ng_th%E1%BB%A9c_Heron
 *
 * @param {number} a Chiều dài cạnh a
 * @param {number} b Chiều dài cạnh b
 * @param {number} c Chiều dài cạnh c
 *
 * @return {number} Diện tích hình tam giác
 */
function findAreaOfTriangle(a, b, c) {
  let p = (a + b + c) / 2;
  return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}
console.log(
  "Diện tích hình tam giác a=3 b=4 c=5 là " + findAreaOfTriangle(3, 4, 5)
);
/**
 * Chuyển đổi nhiệt ở ở thang nhiệt Celsius sang Fahrenheit
 *
 * Tham khảo công thức chuyển đổi trên google
 *
 * @param {number} temp Nhiệt độ ở thang nhiệt Celsius
 *
 * @return {number} Nhiệt độ ở thang nhiệt Fahrenheit
 */
function celsiusToFahrenheit(temp) {
  return (9 / 5) * temp + 32;
}
console.log(
  " Nhiệt độ ở thang nhiệt Fahrenheit 4 là =  " + celsiusToFahrenheit(4)
);
