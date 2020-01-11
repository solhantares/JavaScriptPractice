//first approach to create an object
const circle = {
    radius: 1,
    locaion: {
        x: 2,
        y: 3
    },
    draw: function () {
        console.log('circle is drawing');
    }
}

circle.draw();

//second approach using factory function

function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('circle is drawing from a function with radius = ' + radius);
        }
    };
}
const circ = createCircle(3);
circ.draw();

//third approach using a constructor ;
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log(radius + " is radius of the drawing circle");
    }
}

const constCirc = new Circle(12);
constCirc.draw();

