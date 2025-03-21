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
  const expected: number = -2;

  // Act
  const actual: number = subtract(b, a);

  // Assert
  expect(actual).toBe(expected);
});

test("multiply two by three is six", () => {
  // Arrange
  const a: number = 2;
  const b: number = 3;
  const expected: number = 6;

  // Act
  const actual: number = multiply(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("divide six by three is two", () => {
  // Arrange
  const a: number = 6;
  const b: number = 3;
  const expected: number = 2;

  // Act
  const actual: number = divide(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("divide six by zero throws an error", () => {
  // Arrange
  const a: number = 6;
  const b: number = 0;

  // Act
  const act = () => divide(a, b);

  // Assert
  expect(act).toThrowError("Division by zero is not allowed");
});