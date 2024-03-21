//Using recursion function will continue to call itself until it equals 1, then it will
//continue until it reaches the input value
const fibonacci = function calculateFib(member) {
    if (member < 0){
        return "OOPS";
    }
    if (member == 0){
        return 0;
    }
    if (member == 1){
        return 1;
    }
    return (calculateFib(member - 1) + calculateFib(member - 2));
};

console.log(fibonacci(6));

// Do not edit below this line
module.exports = fibonacci;
