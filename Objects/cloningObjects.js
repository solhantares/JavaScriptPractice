const circle = {
    radius: 2,
    draw() {
        console.log(this.radius);
    }
}
circle.draw();

let another = {};

for (let key in circle)
    another[key] = circle[key];
console.log(another);

let other = Object.assign({},circle);
circle.radius = 55;
console.log(circle);
console.log(other);

let otherOne = {...circle};
console.log(otherOne); 