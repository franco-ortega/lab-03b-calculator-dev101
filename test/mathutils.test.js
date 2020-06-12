import { addNumbers, subtractNumbers, multiplyNumbers, divideNumbers } from '../mathutils.js'; // IMPORT MODULES under test here:
// import example from '../src/mathutils.js';

const test = QUnit.test;

// Addition Tests below this line.
test('time to test a function', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const firstNumber = 10;
    const secondNumber = 2;
    const expectedResult = 12;

    //Act 
    // Call the function you're testing and set the result to a const
    const actualResult = addNumbers(firstNumber, secondNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expectedResult, actualResult);
});

test('time to test a function', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const firstNumber = 0;
    const secondNumber = 5;
    const expectedResult = 5;

    //Act 
    // Call the function you're testing and set the result to a const
    const actualResult = addNumbers(firstNumber, secondNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expectedResult, actualResult);
});

test('time to test a function', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const firstNumber = 4;
    const secondNumber = -6;
    const expectedResult = -2;

    //Act 
    // Call the function you're testing and set the result to a const
    const actualResult = addNumbers(firstNumber, secondNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expectedResult, actualResult);
});

test('time to test a function', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const firstNumber = 105;
    const secondNumber = 32;
    const expectedResult = 137;

    //Act 
    // Call the function you're testing and set the result to a const
    const actualResult = addNumbers(firstNumber, secondNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expectedResult, actualResult);
});


// Subtraction Tests below this line.
test('time to test a function', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const firstNumber = -8;
    const secondNumber = -2;
    const expectedResult = -6;

    //Act 
    // Call the function you're testing and set the result to a const
    const actualResult = subtractNumbers(firstNumber, secondNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expectedResult, actualResult);
});

test('time to test a function', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const firstNumber = 48;
    const secondNumber = 0;
    const expectedResult = 48;

    //Act 
    // Call the function you're testing and set the result to a const
    const actualResult = subtractNumbers(firstNumber, secondNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expectedResult, actualResult);
});

test('time to test a function', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const firstNumber = 100;
    const secondNumber = 20;
    const expectedResult = 80;

    //Act 
    // Call the function you're testing and set the result to a const
    const actualResult = subtractNumbers(firstNumber, secondNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expectedResult, actualResult);
});

test('time to test a function', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const firstNumber = 10;
    const secondNumber = 2;
    const expectedResult = 8;

    //Act 
    // Call the function you're testing and set the result to a const
    const actualResult = subtractNumbers(firstNumber, secondNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expectedResult, actualResult);
});


// Multiplication Tests below this line.
test('time to test a function', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const firstNumber = 8;
    const secondNumber = 2;
    const expectedResult = 16;

    //Act 
    // Call the function you're testing and set the result to a const
    const actualResult = multiplyNumbers(firstNumber, secondNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expectedResult, actualResult);
});

test('time to test a function', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const firstNumber = 5;
    const secondNumber = 0;
    const expectedResult = 0;

    //Act 
    // Call the function you're testing and set the result to a const
    const actualResult = multiplyNumbers(firstNumber, secondNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expectedResult, actualResult);
});

test('time to test a function', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const firstNumber = -10;
    const secondNumber = 2;
    const expectedResult = -20;

    //Act 
    // Call the function you're testing and set the result to a const
    const actualResult = multiplyNumbers(firstNumber, secondNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expectedResult, actualResult);
});

test('time to test a function', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const firstNumber = 5;
    const secondNumber = 25;
    const expectedResult = 125;

    //Act 
    // Call the function you're testing and set the result to a const
    const actualResult = multiplyNumbers(firstNumber, secondNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expectedResult, actualResult);
});

// Division Tests below this line.
test('time to test a function', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const firstNumber = 8;
    const secondNumber = 2;
    const expectedResult = 4;

    //Act 
    // Call the function you're testing and set the result to a const
    const actualResult = divideNumbers(firstNumber, secondNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expectedResult, actualResult);
});

test('time to test a function', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const firstNumber = -20;
    const secondNumber = 4;
    const expectedResult = -5;

    //Act 
    // Call the function you're testing and set the result to a const
    const actualResult = divideNumbers(firstNumber, secondNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expectedResult, actualResult);
});

test('time to test a function', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const firstNumber = 100;
    const secondNumber = 25;
    const expectedResult = 4;

    //Act 
    // Call the function you're testing and set the result to a const
    const actualResult = divideNumbers(firstNumber, secondNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expectedResult, actualResult);
});

test('time to test a function', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const firstNumber = -10;
    const secondNumber = -5;
    const expectedResult = 2;

    //Act 
    // Call the function you're testing and set the result to a const
    const actualResult = divideNumbers(firstNumber, secondNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expectedResult, actualResult);
});
