import { add, subtract, multiply, divide } from "./calculator";

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

test("multiply five by three is fifteen", () => {
  // Arrange
  const a: number = 5;
  const b: number = 3;
  const expected: number = 15;

  // Act
  const actual: number = multiply(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("divide ten by two is five", () => {
  // Arrange
  const a: number = 10;
  const b: number = 2;
  const expected: number = 5;

  // Act
  const actual: number = divide(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("divide five by zero throws an error", () => {
  // Arrange
  const a: number = 5;
  const b: number = 0;
  const expected: number = Infinity;

  // Assert
  expect(() => divide(a, b)).toThrow();
});