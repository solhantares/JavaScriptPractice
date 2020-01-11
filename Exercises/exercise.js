//1. maximum value
function max(a, b) {
    return a > b ? a : b;
}
console.log(max(4, 5));
console.log(max(4, 4));
console.log(max(40, 5));

//2. is landscape
function isLandScape(width, height) {
    //    return width===max(width,height);
    return width > height;
}

console.log(isLandScape(5, 6));
console.log(isLandScape(7, 6));

//3. if the number is divisible by 3 print Fizz
//   if the number is divisible by 3 print Buzz
//   if the number is divisible by 3 and 5  print FizzBuzz
//   if the number is not divisible by 3 or 5 print the input itself
//   if the input is not a number print "Not a number"


function fizzbuzz(input) {
    if (typeof (input) !== 'number')
        return "Not a Number!";
    let fb = '';
    if (input % 3 === 0)
        fb += 'Fizz';
    if (input % 5 === 0)
        fb += 'Buzz';

    return fb === '' ? input : fb;
}
console.log(fizzbuzz(3));
console.log(fizzbuzz(5));
console.log(fizzbuzz(15));
console.log(fizzbuzz(14));
console.log(fizzbuzz('NaN'));

//4. speed limit
// speed limit = 70
// every 5 more than speed limit it adds 1 point

function checkSpeed(speed) {
    const speedLimit = 70
    const kmPerPoint = 5;
    if (speed < speedLimit + kmPerPoint )
        return 'Ok';
    let point = Math.floor((speed - speedLimit) / 5);
    return point >= 12 ? "Lisence suspended" : 'Point : ' + point;

}

console.log(checkSpeed(12));
console.log(checkSpeed(74));
console.log(checkSpeed(80));
console.log(checkSpeed(192));
console.log(checkSpeed(130  ));

//5. show numbers
function showNumbers(limit){
    for(let i = 0; i<= limit; i++){
        console.log(i + ' "' + (i%2===0?'even':'odd')+ '"');
    }
}
console.log(showNumbers(10));

//6. count truthy
function countTruthy(array) {
    let counter = 0;
    for (arr of array) {
        if (arr)
            counter++;
    }
    return counter;
}
console.log(countTruthy(['hi', 'man', 4, 5]));
console.log(countTruthy(['hi', 'man', 4, 0]));
console.log(countTruthy(['hi', '', 0, 5]));

//7, show properties
function showProperties(obj) {
    for (ob in obj) {
        if (typeof (obj[ob]) === 'string')
            console.log(ob, obj[ob]);
    }
}
let movie = {
    title: 'Success',
    release: 2020,
    rate: 3.5,
    author: "Solomon"
};
showProperties(movie);

//8. sum multiple of 3 or 5 within the limit

function sumMult3Or5(limit) {
    let sum = 0;

    for (let i = 0; i <= limit; i++) {
        if (i % 3 === 0 || i % 5 === 0)
            sum += i;
    }

    return sum;
}
console.log(sumMult3Or5(10));

//8. Calculate grade

function calculateGrade(marks) {
    let average = calculateAverage(marks);
    if (average >= 90)
        return 'A';
    if (average >= 80)
        return 'B';
    if (average >= 70)
        return 'C';
    if (average >= 60)
        return 'D';
    return 'F';
}
function calculateAverage(marks) {
    let total = 0;
    for (mrk of marks)
        total += mrk;
    let average = total / marks.length;
    return average;
}
let marks = [80, 80, 70, 40];
console.log(calculateGrade(marks));

//9. show stars
function shoStars(rows) {
    let star = '';
    for (let i = 1; i <= rows; i++) {
        star += '*';
        console.log(star);
    }
}
shoStars(5);

//10. display prime numbers till the limit

function showPrimes(limit) {
    xx: for (let i = 2; i <= limit; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0)
                continue xx;
        }
        console.log(i);
    }
}
showPrimes(20);

//10.1 single responsibility pattern  show primes
function showPrimes2(limit) {
    for (let i = 2; i <= limit; i++)
        if (isPrime(i))
            console.log(i);
}
function isPrime(number) {
    for (let j = 2; j < number; j++)
        if (number % j === 0)
            return false;
    return true;
}
showPrimes2(20);