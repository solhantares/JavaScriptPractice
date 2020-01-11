

let hour = 244;
let greeting = 'good ';

if (hour > 6 && hour <= 12)
    greeting += 'Morning';
else if (hour > 12 && hour <= 18)
    greeting += 'Afternoon';
else
    greeting += 'Evening';

console.log(greeting);