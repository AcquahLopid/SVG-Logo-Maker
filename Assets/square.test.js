const Square = require("./square");

describe('Square', () => {
    it('should render a text with the correct color', () => {
        const squareTest = `<rect x="50" y="20" width="150" height="150" fill = "red" />`;
        const square = new Square();
        square.chosenColor("red");
        expect(square.render()).toEqual(squareTest);
    });
});