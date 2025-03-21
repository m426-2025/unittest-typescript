import { add, division, multiply, subtract } from "./calculator";

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

test("multiply two with three is six", () => {
  // Arrange
  const a: number = 2;
  const b: number = 3;
  const expected: number = 6;

  // Act
  const actual: number = multiply(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("division with nine and three is three", () => {
  // Arrange
  const a: number = 9;
  const b: number = 3;
  const expected: number = 3;

  // Act
  const actual: number = division(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("division with something and 0 is an error", () => {
  // Arrange
  const a: number = 9;
  const b: number = 0;

  // Act + Assert
  expect(() => division(a, b)).toThrowError("Division by zero is not allowed");
});