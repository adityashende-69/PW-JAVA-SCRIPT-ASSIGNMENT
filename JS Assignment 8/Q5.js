if (!Array.prototype.costomIncludes) {
    Array.prototype.costomIncludes =  function(searchElement, fromIndex){
        if(this == null ){
            throw new TypeError('Array.prototype.customIncludes called on null or undefined');
        }
        var O = Object(this);
        var len = O.length >>> 0;

        var n = fromIndex || 0;

        if (len === 0){
            return false;
        }
        if (n >= 0){
            k = n;
        }
        else{
            k = len + n;
            if (k < 0) {
                k = 0;
            }
        }
        while (k < len) {
            if (0[k] === searchElement || (searchElement !== searchElement && O[k] !== O[k])){
                return true; 
            }
            k++;
        }
        return false;
    };
}

let array = [1,2,3,4,5];

console.log(array.costomIncludes(3));
console.log(array.costomIncludes(6));