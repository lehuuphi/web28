/*let username='huuphi'
let password='123'
let isusername;
let ispassword;

while(isusername != username || ispassword != password){
  isusername = prompt("nhap user");
  ispassword = prompt("password");
}
console.log("heloo")
let i=1;
while(i<=10){
    console.log(i);
    i++;
}
*/
function countFolding(thickness) {
  let i = 0;
  while(i<thickness){
      thickness /2;
      i++
      console.log(i);
  }
}
console.log(countFolding(10))