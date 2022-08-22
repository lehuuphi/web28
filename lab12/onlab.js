/**
 * In dãy số lẻ trong khoảng từ 1 đến 100
 */
function printOddNumbers() {
    for(let i=1 ; i<100 ; i++)
       if( i % 2 != 0 ){
        console.log(i);
    }
}
    printOddNumbers();
/**
 * In dãy số chẵn trong khoảng từ 1 đến 100
 */
function printEvenNumbers() {}

/**
 * Tính tổng các số tự nhiên trong khoảng từ 1 đến `n`
 * @param {number} n Số nguyên dương bất kỳ
 */
function sumOfNumbers(n) {}

/**
 * Tính tổng các số lẻ trong khoảng từ `start` đến `end`
 *
 * @returns {number} Tổng các số lẻ
 */
 function sumOfOddNumbers(start, end) {
    let sum = 0;
    for( let i=start ; i<end ; i++ ){
  
      if( i % 2 != 0 )
      sum += i;
    }
    return sum ;
  }
  console.log(sumOfOddNumbers(1,100));

/**
 * Tìm các ước số của một số bất kỳ
 *
 * @param {number} number Số nguyên dương bất kỳ
 *

 */
 function divisor(number) {
    for(let i=0 ; i<=number ; i++)
    if(number%i==0){
        console.log(i);
    }
  }
  console.log(divisor(100));
/**
 * Tính số lần gấp 1 tờ giấy có độ mỏng 0.1mm để đạt được độ dày mong muốn
 *
 * @param {number} thickness Độ dày mong muốn tính theo đơn vị m
 *
 * @return {number} Số lần gấp giấy để đạt được độ dày yêu cầu
 */
function countFolding(thickness) {
    let x = 0.1 ;
    thickness *= 1000 
    let sum=0 ;
    while(thickness>x){
      x=x*2;
      sum++
    }
    return sum;
}
console.log(countFolding(1))
/**
 * tính xem sau bao nhiêu năm nữa thì tuổi cha gấp 2 lần tuổi con
 *
 * @param {number} dad Tuổi của cha
 * @param {number} son Tuổi của con
 *
 * @returns {number} Số năm để tuổi cha gấp 2 lần tuổi con
 */
function countYears(dad, son) {
    let count =0
    while( dad/son != 2){
         dad++;
         son++;
         count++;
    }
    return count;
}
console.log(countYears(30,4));

/**
 * Tìm số chân gà và chó trong bài toán
 *
 * Vừa gà vừa chó
 * Bó lại cho tròn
 * Ba mươi sáu con
 * Một trăm chân chẵn
 */
 function countLegs() {
   let chicken_legs=2;
   let dog_legs = 4;
   let total_aniaml=36;
   let total = 100;

   while((x * 2 + (36 - x) * 4) != 100){
      x++
   }
}