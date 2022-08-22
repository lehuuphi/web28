//bài 1
function title(str) {
    let sentence = str.toLowerCase().split(" "); 
    for(let i = 0; i< sentence.length; i++){
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
     }
     return sentence.join(" ");
    }
 console.log(title("HELLO world"))
//bài 2 
function Spinalcase(str) {
    let sentence = str.toLowerCase().split(" "); 
    for(let i = 0; i< sentence.length; i++){
        sentence[i] = sentence[i][0].toLowerCase() + sentence[i].slice(1);
     }
     return sentence.join("-");
    }
 console.log(Spinalcase("HELLO world"))
 // bài 3 
 function reverse_str(str) {
    str = str.toString()
    return str.split("").reverse().join("");
 }
 function symmetrical(str){
    if( reverse_str(str) == str ){
        return true;
    }
    else{
        return false ;
    }
 }
 console.log(symmetrical('huu uuh')) // true
 console.log(symmetrical('huu phi')) // false
 // bài 4 
 function compareString(str,str2){
    if(str == str2){
        return true ;
    }
    return false
 }
 console.log("compare",compareString('1','1'))
 

 