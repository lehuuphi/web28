
    function isValidTriangle(a, b, c) {
        if ( ((a + b) > c) && (( a + c ) > b) && ((b+c) > a)){
            return true;
        }else{
            return false;
        }
    }
        console.log(isValidTriangle(2,3,4))
        console.log(isValidTriangle(2,5,6))
        console.log(isValidTriangle(-2,3,4))



