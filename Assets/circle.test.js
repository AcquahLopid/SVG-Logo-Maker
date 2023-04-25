const Circle = require("./circle");

describe('Circle', () => {
    it('should render a text with the correct color', () => {
        const circleTest = `<circle cx="50" cy="50" r="40" stroke= "red" stroke-width="3"/>`;
        const circle = new Circle();
        circle.chosenColor("red");
        expect(circle.render()).toEqual(circleTest);
    });
});