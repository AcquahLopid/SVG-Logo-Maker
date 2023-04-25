const Circle = require("./circle");
const Square = require("./square");
const Triangle = require("./triangle");

function generateLogo(data){
    // global variables
    let shape;

    if(data.shape == 'circle'){
        shape = new Circle;
    } else if (data.shape == 'square'){
        shape = new Square;
    } else if(data.shape == 'triangle'){
        shape = new Triangle;
    }
    shape.chosenColor(data.shapeColor);

    //create the SVG element with a viewbox
       const svg = `
       <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
           ${shape.render()}
           <text x="125" y="120" font-size = "60" text-anchor = "middle" fill="${data.color}">${data.characters}</text>
       </svg>
   `;
  return svg;
}

module.exports = generateLogo;