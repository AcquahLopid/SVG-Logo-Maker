const Shape = require("./shapeForAll");

class Circle extends Shape{ // inherits data from the Shape class in shapeForAll.js

    render(){ //creates a circle when called to
    return '<circle cx="50" cy="50" r="40" stroke= ${this.color} stroke-width="3">';
    }
}