const shape = require('./shapes.js');

describe('shape', () => {
    describe('triangle', () => {
        it('should return the triangle polypoints if "triangle" is input', () => {
            const returnedShape = "<polygon points='0,300 150,50 300, 300' />";
            const userShape = new shape();
            expect(userShape.triangle()).toEqual(returnedShape);
        });
    });
});

describe('shape', () => {

    describe('square', () => {
        it('should return the square polypoints if "square" is input', () => {
            const returnedShape = "<polygon points='0,300 300,300 300,0 0,0' />";
            const userShape = new shape();
            expect(userShape.square()).toEqual(returnedShape);
        });
    });
});

describe('shape', () => {
    describe('circle', () => {
        it('should return the circle polypoints if "circle" is input', () => {
            const returnedShape = "<circle cx='150' cy='150' r='150' />";
            const userShape = new shape();
            expect(userShape.circle()).toEqual(returnedShape);
        });
    });
});