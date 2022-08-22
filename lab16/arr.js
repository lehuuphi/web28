const a =[false,null,undefined,NaN,0,"",1,2,3,4]
function deleteEmpty(array){
    const result = array?.filter((v)=>{
        return !!v
    })
    console.log(result)
}
deleteEmpty(a);
// bài 2 
function fillter(array){
    let max = array[0];
    for( let i = 0 ; i < array.length ; i++){
        if(array[i].length > max.length){
            max = array[i]
        }
    }
    return max

}
console.log(fillter(["huu" , "ph54948i" ]));
//bài 3 
function difference(arr1, arr2) {
    const result = [];
    for (const number of arr1) 
        if(!arr2.includes(number))
            result.push(number)
    
    for (const number of arr2) 
        if(!arr1.includes(number))
            result.push(number)
    return result ;
}
console.log(difference([1,2,3],[3,2,1,6,78]));
//bài 4 
