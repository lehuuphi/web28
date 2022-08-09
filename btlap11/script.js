/**
 * Tìm số lớn nhất trong 3 số
 *
 * @param {number} a Số thứ 1
 * @param {number} b Số thứ 2
 * @param {number} c Số thứ 3
 *
 * @return {number} Số lớn nhất trong 3 số
 */
function maxOfThree(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}
console.log(maxOfThree(3, 4, 5));
console.log(maxOfThree(-6, 2, 0));
console.log(maxOfThree(-6, -2, -5));
/**
 * Tìm mùa tương ứng với tháng
 *
 * - Winter (mùa đông): 12, 1, 2
 * - Spring (mùa xuân): 3, 4, 5
 * - Summer (mùa hạ): 6, 7, 8
 * - Fall (mùa thu): 9, 10, 11
 *
 * @param {number} month Tháng trong năm
 *
 * @return {number} Mùa tương ứng với tháng (Winter | Spring | Summer | Fall)
 */
function findSeason(month) {
  if (month == 12 || month == 1 || month == 2) {
    return "Winter";
  }
  if (month == 3 || month == 4 || month == 5) {
    return " Spring";
  }
  if (month == 6 || month == 7 || month == 8) {
    return "Summer";
  }
  if (month == 11 || month == 10 || month == 9) {
    return "Fall";
  }
}
console.log((findSeason(9)));
console.log((findSeason(2)));
console.log((findSeason(5)));


function findSeason(month){
  switch(month){
    case 12: case 1: case 2:
      return "Winter";
    case 3: case 4: case 5:
      return "Spring";
    case 6: case 7: case 8:
      return "Summer";
    case 9: case 10: case 11:
      return "Fall";
  }
}
console.log((findSeason(9)));
console.log((findSeason(7)));
console.log((findSeason(4)));

/**
 * Kiểm tra xem một năm có phải năm nhuận hay không
 *
 * Theo lịch Gregory, năm nhuận là năm có số năm chia hết cho `4` và không chia hết cho `100`,
 * tuy nhiên ngoại lệ với các năm chia hết cho `100` vẫn được coi là năm nhuận nếu nó cũng chia hết cho `400`
 *
 * - `2020` là năm nhuận vì chia hết cho `4` nhưng không chia hết cho `100`
 * - `2100` không phải năm nhuận vì chia hết cho `4` nhưng chia hết cho `100`
 * - `2000` là năm nhuận vì chia hết cho `100` nhưng cũng chia hết cho `400`
 *
 * @param {number} year Năm bất kỳ
 *
 * @return {boolean} Năm này có phải năm nhuận hay không
 */
function isLeafYear(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}
console.log(isLeafYear(2020));
console.log(isLeafYear(2100));
console.log(isLeafYear(2000));
console.log(isLeafYear(2022));
/**
 * Tìm số ngày trong tháng
 *
 * - Các tháng `1`, `3`, `5`, `7`, `8`, `10`, `12` có `31` ngày
 * - Các tháng `4`, `6`, `9`, `11` có `30` ngày
 * - Tháng `2` có `29` ngày nếu là năm nhuận, nếu không là `28` ngày
 *
 * @param {number} month Tháng bất kỳ
 * @param {number} year Năm bất kỳ
 *
 * @return {number} Số ngày trong tháng đó
 */
function findDayOfMonth(month, year) {
 if( month == 1 || month == 3 || month == 5 ||month == 7 ||month == 8 ||month == 10 ||month == 12 ){
  return '31 ngày';
 }else if(month == 4 || month == 6 || month == 9 ||month == 11 ){
  return '30 ngày';
 } else if((month == 2 && year % 4 == 0 && year % 100 != 0) || year % 400 == 0 )
{
  return '29 ngày'
}else{
  return '28 ngày'
}
}
console.log(findDayOfMonth(2,2022))
console.log(findDayOfMonth(3,2025))
console.log(findDayOfMonth(2,2024))
/**
 * Xếp loại sinh viên theo số điểm trung bình
 *
 * @param {number} point Điểm trung bình của sinh viên
 *
 * @return {'A' | 'B' | 'C' | 'D' | 'F'} Xếp hạng tốt nghiệp của sinh viên
 */
function calcGrade(point) {
  if (point < 4) {
    return "F";
  } else if ((point < 5, 5)) {
    return "D";
  } else if (point < 7) {
    return "C";
  } else if ((point < 8, 5)) {
    return "B";
  } else if (point < 10) {
    return "A";
  }
}
console.log(calcGrade(9));
console.log(calcGrade(4));

/**
 * Tính tiền cước taxi cho khách theo số kilomet đã di chuyển
 *
 * - Phí mở cửa cố định là `10.000đ`
 * - Giá cho `30km` đầu tiên là `11.000đ/km`
 * - Từ kilomet thứ `31` giá là `9.500đ/km`
 * - Tổng tiền cước = Phí mở cửa + tổng tiền theo số kilomet đã di chuyển
 *
 * @param {number} km Số kilomet đã di chuyển
 *
 * @return {number} Số tiền phải trả
 */
function calcTaxiFee(km) {
  let taxi = 30 > km >= 0 ? 11.0 * km + 10.0 : km * 9.5 + 10.0;
  return taxi;
}
console.log(calcTaxiFee(15));

/**
 * Tìm nghiệm phương trình bậc 2 ax^2 + bx + c = 0
 *
 * - Nếu phương trình có vô số nghiệm thì trả về `Infinity`
 * - Nếu phương trình vô nghiệm thì trả về `null`
 * - Nếu phương trình có 1 nghiệm thì trả về nghiệm đó
 * - Nếu phương trình có 2 nghiệm thì trả về một *mảng* chứa 2 nghiệm, cú pháp `[x1, x2]`
 *
 * @param {number} a Tham số a
 * @param {number} b Tham số b
 * @param {number} c Tham số c
 *
 * @return {number | [number, number] | null} Nghiệm phương trình
 */
function solveEquation(a, b, c) {
  if (a == 0) {
    if (b == 0) {
      if (c == 0) {
        return "Infinity";
      } else {
        return "null";
      }
    } else {
      return -c / b;
    }
  } else {
    let denta = b * b - 4 * a * c;
    if (denta > 0) {
      let denta1 = Math.sqrt(denta);
      let x1 = (-b + denta1) / (2 * a);
      let x2 = (-b - denta1) / (2 * a);
      return [x1, x2];
    } else if (denta == 0) {
      return (-b / 2) * a;
    } else {
      return null;
    }
  }
}
console.log(solveEquation(0, 0, 0));
console.log(solveEquation(1, 2, 1));
console.log(solveEquation(3, 4, 6));
console.log(solveEquation(1, 6, 2));
