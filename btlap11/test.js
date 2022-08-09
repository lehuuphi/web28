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