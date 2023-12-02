let n =[1 , 2, 3, 4, 5, 6, 7, 8, 9 ];
function fectorial(n) {
    if (n === 0 ){
        return 1
    }

     return n * fectorial(n-1);
    }


console.log(fectorial(4));