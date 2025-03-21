import { add, multiply, subtract, divide } from "./calculator";

test("add three to two is five", () => {
  // Arrange
  const a: number = 5;
  const b: number = 3;
  const expected: number = 8;

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

test("multiply", () => {
  // Arrange
  const a: number = 2;
  const b: number = 10;
  const expected: number = 20;

  // Act
  const actual: number = multiply(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("divide", () => {
  // Arrange
  const a: number = 20;
  const b: number = 10;
  const expected: number = 2;

  // Act
  const actual: number = divide(a, b);

  // Assert
  expect(actual).toBe(expected);
});