import { add, subtract, multiply, divide } from "./calculator";

test("add three to two is five", () => {
  // Arrange
  const a: number = 6;
  const b: number = 3;
  const expected: number = 9;

  // Act
  const actual = add(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("subtract four from six is two", () => {
  // Arrange
  const a: number = 6;
  const b: number = 4;
  const expected: number = 2;

  // Act
  const actual: number = subtract(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("multiply 4 by 5 is 20", () => {
  //Arrange
  const a: number = 4;
  const b: number = 5;
  const expected: number = 20;

  //Act
  const actual: number = multiply(a, b);

  //assert
  expect(actual).toBe(expected);
});


test("divide 30 by 3 is 10", () => {
  //Arrange
  const a: number = 30;
  const b: number = 3;
  const expected: number = 10;

  //Act
  const actual: number = divide(a, b);

  //assert
  expect(actual).toBe(expected);
});


test("divide 30 by 0 is 0", () => {
  //Arrange
  const a: number = 30;
  const b: number = 0;
  const expected: number = 0;
  if (b === 0) {
    console.log("Division by zero is not possible");
  }
  //Act
   const actual: number = divide(a, b);
  
   
  //assert
  expect(actual).toBe(expected);
});