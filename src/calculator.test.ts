import { add, subtract, multiply, divide } from "./calculator";

test("add four to three is seven", () => {
  // Arrange
  const a: number = 4;
  const b: number = 3;
  const expected: number = 7;

  // Act
  const actual = add(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("subtract five from six is one", () => {
  // Arrange
  const a: number = 6;
  const b: number = 5;
  const expected: number = 1;

  // Act
  const actual: number = subtract(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("mutliply two by three is six", () => {
  // Arrange
  const a: number = 2;
  const b: number = 3;
  const expected: number = 6;

  // Act
  const actual: number = multiply(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("divide ten by two is five", () => {
  // Arrange
  const a: number = 10;
  const b: number = 2;
  const expected: number = 5.0;

  // Act
  const actual: number = divide(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("divide ten by zero is Infinity", () => {
  // Arrange
  const a: number = 10;
  const b: number = 0;

  // Assert
  expect(() => divide(a, b)).toThrow("Division by zero is not allowed.");
});
