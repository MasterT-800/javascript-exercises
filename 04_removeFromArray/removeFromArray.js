const removeFromArray = function(group, out) {
    let size = group.length;
    let argSize = arguments.length;
    for (let i = 1; i < argSize; i++){
        for (let j = 0; j < size; j++){
            if (group[j] === arguments[i]){
                group.splice(j, 1);
            }
        }
    }    
    return group;
};

console.log(removeFromArray([1,2,3],4,3));

// Do not edit below this line
module.exports = removeFromArray;
