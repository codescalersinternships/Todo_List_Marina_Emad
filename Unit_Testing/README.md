# Math Functions Library

A simple JavaScript library for basic arithmetic operations, including addition, subtraction, multiplication, and division. This library is accompanied by a comprehensive set of unit tests using Jest.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Functions](#functions)
- [Testing](#testing)
- [License](#license)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/codescalersinternships/Todo_List_Marina_Emad.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Unit_Testing
    ```

3. Install the dependencies:

    ```bash
    npm install --save-dev jest
    npm install jest --global
    npm init jest@latest
    npm install --save-dev babel-jest @babel/core @babel/preset-env
    npm install --save-dev @babel/preset-typescript
    npm install --save-dev ts-jest
    npm install --save-dev @jest/globals
    npm install --save-dev @types/jest
    ```

## Usage

1. Import the library in your Typescript file:

    ```typescript
    const calc = require('./equations');

    console.log(calc.add(2, 3)); // 5
    console.log(calc.subtract(5, 2)); // 3
    console.log(calc.multiply(4, 3)); // 12
    console.log(calc.divide(10, 2)); // 5
    ```

## Functions

### `add(a, b)`
- Adds two numbers.
- **Parameters**: `a` (number), `b` (number)
- **Returns**: `number`
- **Example**: `calc.add(1, 2)` returns `3`

### `subtract(a, b)`
- Subtracts the second number from the first.
- **Parameters**: `a` (number), `b` (number)
- **Returns**: `number`
- **Example**: `calc.subtract(5, 3)` returns `2`

### `multiply(a, b)`
- Multiplies two numbers.
- **Parameters**: `a` (number), `b` (number)
- **Returns**: `number`
- **Example**: `calc.multiply(2, 3)` returns `6`

### `divide(a, b)`
- Divides the first number by the second.
- **Parameters**: `a` (number), `b` (number)
- **Returns**: `number`
- **Throws**: `Error` if `b` is `0`
- **Example**: `calc.divide(6, 3)` returns `2`

## Testing

This project uses Jest for unit testing. The test cases are written in `equations.test.js`.

1. To run the tests, use the following command:

    ```bash
    npm test
    ```

2. Sample test structure:

    ```typescript
    const calc = require('./equations');

    describe('Addition Tests', () => {
        test('should add 1 + 1 to equal 2', () => {
            expect(calc.add(1, 1)).toBe(2);
        });

        test('should add -2 + -3 to equal -5', () => {
            expect(calc.add(-2, -3)).toBe(-5);
        });

        test('should add 2.3 + -3 to equal -0.7', () => {
            expect(calc.add(2.3, -3)).toBeCloseTo(-0.7);
        });
    });

    // Additional tests for subtraction, multiplication, and division
    ```


