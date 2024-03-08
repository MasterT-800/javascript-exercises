const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0){
        return 'ERROR';
    }
    if (typeof num1 != 'number' || typeof num2 != 'number'){
        return 'ERROR';
    }
    let a;
    let b;
    if (num1 < num2){
        a = num1;
        b = num2;
    }
    else {
        a = num2;
        b = num1;
    }
    return ((a + b)*(b - a+1))/2;
};

// Do not edit below this line
module.exports = sumAll;
