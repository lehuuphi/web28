/**
 * Trả về chuỗi đại diện cho ngày hôm nay theo định dạng VN
 *
 * Ví dụ: 01/10/2022 (lưu ý, ngày tháng đầy đủ 2 chữ số)
 *
 * @returns {string} Chuỗi ngày tháng
 */
 function currentDate() {
    var time = new Date(2020, 9, 25);
console.log(time);
 }
 currentDate()

 /**
  * Trả về chuỗi đại diện cho thời gian hiện tại
  *
  * Ví dụ: 10:30:59 (lưu ý, giờ, phút, giây đầy đủ 2 chữ số)
  *
  * @returns {string} Chuỗi thời gian
  */
 function currentTime() {}
 
 /**
  * Tìm thứ trong tuần tương ứng với ngày hiện tại
  *
  * Ví dụ: T2, T3, ..., CN
  *
  * @returns {string} Thứ tương ứng
  */
 function todayWeekday() {}
 
 /**
  * Tìm ngày cuối cùng của tháng
  *
  * @param {Date} date - Ngày bất kỳ
  *
  * @returns {Date} Ngày cuối tháng
  */
 function getLastDayOfMonth(date) {}
 
 /**
  * Tính số ngày đến tết dương lịch năm sau
  *
  * @returns {number} Số ngày cho đến tết dương lịch năm sau
  */
 function getDaysToNextYear() {}
 
 /**
  * Tính số ngày cho đến sinh nhật tiếp theo
  *
  * @param {number} month Tháng sinh
  * @param {number} day Ngày sinh
  *
  * @return {number} Số ngày cho đến sinh nhật tiếp theo
  */
 function getDaysToNextBirthday(month, day) {}
 
 /**
  * @typedef {Object} user
  * @property {string} fullname - Họ tên
  * @property {string} dateOfBirth - Ngày sinh
  */
 
 /**
  * Kiểm tra xem ai có sinh nhật vào hôm nay
  *
  * @param {user[]} users Danh sách người dùng
  *
  * @return {user[]} Danh sách người có sinh nhật vào hôm nay
  */
 function todayBirthday(users) {}