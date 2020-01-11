
function customerType(score){
    return score>100?'Gold':'Silver';
}

console.log(customerType(98));
console.log(customerType(100));
console.log(customerType(150));

