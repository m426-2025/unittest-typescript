import { add, subtract, multiply, divide } from "./calculator";

test("add four to two is six", () => {
  // Arrange
  const a: number = 2;
  const b: number = 4;
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

test("multiply three with four is twelve", () => {
  // Arrange
  const a: number = 3;
  const b: number = 4;
  const expected: number = 12;

  // Act
  const actual: number = multiply(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("divide eight by four is two", () => {
  // Arrange
  const a: number = 8;
  const b: number = 4;
  const expected: number = 2;
  
  // Act
  const actual: number = divide(a, b);
  
  // Assert
  expect(actual).toBe(expected);
});

test("divide by zero throws error", () => {
  // Arrange
  const a: number = 10;
  const b: number = 0;
  
  // Act & Assert
  expect(() => divide(a, b)).toThrow("Division durch 0 ist nicht erlaubt.");
});