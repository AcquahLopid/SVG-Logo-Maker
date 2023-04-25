const Shape = require("./shapeForAll"); 

class Circle extends Shape{ // inherits data from the Shape class in shapeForAll.js

    render(){ 
    return `<circle cx="125" cy="105" r="80" fill= "${this.color}" />`; // creates circle
    }
}
// Exports the Circle class we made to be used in other places
module.exports = Circle;