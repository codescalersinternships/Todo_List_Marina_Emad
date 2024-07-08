const calc = require('./equations'); // Ensure the correct path is used

describe('Addition Tests', () => {
    test('should add 3 + 2 to equal 5', () => {
        expect(calc.add(3, 2)).toBe(5);
    });

    test('should add -4 + -6 to equal -10', () => {
        expect(calc.add(-4, -6)).toBe(-10);
    });

    test('should add 5.4 + -1 to equal 4.4', () => {
        expect(calc.add(5.4, -1)).toBeCloseTo(4.4);
    });
});

describe('Subtraction Tests', () => {
    test('should subtract 5 - 3 to equal 2', () => {
        expect(calc.subtract(5, 3)).toBe(2);
    });

    test('should subtract 3 - (-2) to equal 5', () => {
        expect(calc.subtract(3, -2)).toBe(5);
    });

    test('should subtract 2.5 - 1.2 to equal 1.3', () => {
        expect(calc.subtract(2.5, 1.2)).toBeCloseTo(1.3);
    });
});

describe('Multiplication Tests', () => {
    test('should multiply 3 * 4 to equal 12', () => {
        expect(calc.multiply(3, 4)).toBe(12);
    });

    test('should multiply 2 * 3 to equal 6', () => {
        expect(calc.multiply(2, 3)).toBe(6);
    });

    test('should multiply 1 * 5 to equal 5', () => {
        expect(calc.multiply(1, 5)).toBe(5);
    });
});

describe('Division Tests', () => {
    test('should divide 6 / 3 to equal 2', () => {
        expect(calc.divide(6, 3)).toBe(2);
    });

    test('should divide 9 / -3 to equal -3', () => {
        expect(calc.divide(9, -3)).toBe(-3);
    });

    test('should throw error when dividing by zero', () => {
        expect(() => calc.divide(1, 0)).toThrow('Cannot divide by zero');
    });
});
