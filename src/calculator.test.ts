import { add, subtract, multiply, divide } from "./calculator";

test("add three to two is five", () => {
  // Arrange
  const a: number = 2;
  const b: number = 3;
  const expected: number = 5;

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

test("multiply five with two is ten", () => {
  // Arrange
  const a: number = 5;
  const b: number = 2;
  const expected: number = 10;

  // Act
  const actual: number = multiply(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("divide sixty with ten is six", () => {
  // Arrange
  const a: number = 60;
  const b: number = 10;
  const expected: number = 6;

  // Act
  const actual: number = divide(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("throws on division with 0", () => {
  // Arrange
  const a: number = 5;
  const b: number = 0;

  // Act
  function divideByZero() {
    divide(a, b);
  } 
  
  // Assert
  expect(divideByZero).toThrow("Error Domain");
});