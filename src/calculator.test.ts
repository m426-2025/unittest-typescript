import { add, multiply, subtract, divide } from "./calculator";

test("add three to two is five", () => {
  // Arrange
  const a: number = 3;
  const b: number = 3;
  const expected: number = 6;

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

test("multiply two with four", () => {
  // Arrange
  const a: number = 2;
  const b: number = 4;
  const expected: number = 8;

  // Act
  const actual: number = multiply(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("divide eight with four", () => {
  // Arrange
  const a: number = 8;
  const b: number = 4;
  const expected: number = 2;

  // Act
  const actual: number = divide(a, b);
  try{
    const actual: number = divide(a, b);
  }
  catch(error){
    throw new Error("Division by zero is not allowed");
  }

  // Assert
  expect(actual).toBe(expected);
});
