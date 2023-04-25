const Shape = require("./shapeForAll");

class Triangle extends Shape{ // inherits data from the Shape class in shapeForAll.js

    render(){
        return `<polygon points="120,10 210,150 50,150" fill =  "${this.color}" />`; // creates triangle
    }
}
// Exports the Triangle class we made to be used in other places
module.exports = Triangle;