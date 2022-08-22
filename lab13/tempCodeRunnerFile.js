// Danh sách sinh viên và quốc gia tương ứng
// Tên sinh viên là key còn quốc gia là value
const guessList = {
    Randy: "Germany",
    Karla: "France",
    Wendy: "Japan",
    Norman: "England",
    Sam: "Argentina",
};
/**
 * Kiểm tra xem `name` có trong `guessList` hay không
 *
 * - Nếu có thì trả về chuỗi theo mẫu: `Hi! I'm [name], and I'm from [country]!`
 * - Nếu không có thì trả về chuỗi theo mẫu: `Hi! I'm guess.`
 *
 * @param {string} name Tên bất kỳ
 *
 * @return {string} Câu chào
 */
function greeting(name) {
    for(let key in  guessList){
        console.log(" key" , key);
    }
}
greeting();