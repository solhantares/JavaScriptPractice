function sayHi(){
    console.log("hi man");
}
function sayNo(){
    console.log('No');
}
sayHi();
// console.log(sayHi.constructor);
console.log(sayHi()); 
let x = 'sol';
x = new String('solomon');
console.log(x);//.valueOf());
console.log(x.constructor);

let y = true;
let z = new Boolean(false);
console.log(y.valueOf());
console.log(z.valueOf());
let a = new Number('45');
a++;
console.log(a);
console.log(a.valueOf());
let arr = [sayHi,sayNo];

for(ar of arr){
    ar.apply();
}
