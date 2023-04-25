const Shape = require("./shapeForAll");

class Square extends Shape{ // inherits data from the Shape class in shapeForAll.js
    render(){
        return `<rect x="50" y="30" width="150" height="150" fill = "${this.color}" />` //creates a square
    }
}
// Exports the Square class we made to be used in other places
module.exports = Square; 