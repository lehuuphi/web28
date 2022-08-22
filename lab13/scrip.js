/*let self = {
    name : 'phi',
    gender:"male",
    weght: 52,
speck(){
    console.log("heloo")
}
};
// vong  lặp duyệt qua từn thuộc tinh trong objectfor (let key in self){
    console.log("key",key ,"value",self[key] )
}
function hello(){
    console.log("heloo, i'am" + this.name);
}
const phi = {
    name:"phi"
}
const mai = {
    name = "mai"
};
phi.hello= hello;
phi.hello
*/

let dog = {
    name : "Daisy",
    age : 15,
    bread :"Phốc",
    gender :"Male",
    color:"red",
    legs: 4,
" favorite food":"mèo",
eat(){
    console.log(this.name + " is eating" + this["favorite food"]+"yum yum" );
},
run() {
   console.log(this.name + "is running on" + this.legs + "legs...");
},
};
console.log(dog);
console.log(dog.name);
console.log(dog["favorite food"]);
dog.color = "brown";
dog.name = "phi";
dog.age += 2;
dog.run();
dog.eat();
for(let Key in dog){
    console.log("key",Key)
}
for(let value in dog){
    console.log("value" , value ,dog[key]);
}
dog.isCrazy = false;
dog.crazy = function(){
    if(!this.isCrazy){
        console.log(this.name + "is not crazy");
    }else{
        for(let i=0; i<=5 ; i++){
            this.run();
            this.bark();
        }
    }
};
dog.crazy();