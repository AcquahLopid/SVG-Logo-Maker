const Triangle = require("./triangle");

describe('Triangle', () => {
    it('should render a text with the correct color', () => {
        const triangleTest = `<polygon points="200,10 250,190 160,210" fill = "red" />`;
        const triangle = new Triangle();
        triangle.chosenColor("red");
        expect(triangle.render()).toEqual(triangleTest);
    });
});