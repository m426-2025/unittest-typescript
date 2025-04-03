import { add, subtract, multiply, divide } from "./calculator";

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
  const b: number = 3;
  const expected: number = 3;

  // Act
  const actual: number = subtract(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("multiply 5 with 7", () => {
  // Arrange
  const a: number = 5;
  const b: number = 7;
  const expected: number = 35;

  // Act
  const actual: number = multiply(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("divide 38.5 by 7", () => {
  // Arrange
  const a: number = 38.5;
  const b: number = 7;
  const expected: number = 5.5;

  // Act
  const actual: number = divide(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("divide 20 by 0", () => {
  // Arrange
  const a: number = 20;
  const b: number = 0;
  const expected: number = Infinity;

  // Act
  const actual = () => { divide(a, b); };

  // Assert
  expect(actual).toThrow("Division by zero is not allowed.");
});
