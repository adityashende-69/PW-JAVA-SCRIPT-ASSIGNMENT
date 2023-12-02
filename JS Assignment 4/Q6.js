function curry(fct){
    const aditya = fct.length;
    function curried(...arguments){
        if (arguments.length = aditya){
            return fct(...arguments);
        }
        return function (...nextarguments){
            return curried(...arguments, ...nextarguments);
        };
    }
        return curried;
    }
    function addtwonumbers(y , z){
        return y+ z;
    }
    const curriedAdd = curry(addtwonumbers);
    
    console.log(curriedAdd(69, 69));

