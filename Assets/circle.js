const Shape = require("./shapeForAll"); 

class Circle extends Shape{ // inherits data from the Shape class in shapeForAll.js

    render(){ 
    return `<circle cx="50" cy="50" r="40" stroke= "${this.color}" stroke-width="3"/>`; // creates circle
    }
}
// Exports the Circle class we made to be used in other places
module.exports = Circle;