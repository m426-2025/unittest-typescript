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

test("multiply four by three is twelve", () => {
  const a = 4;
  const b = 3;
  const expected = 12;

  expect(multiply(a, b)).toBe(expected);
});

test("divide six by two is three", () => {
  const a = 6;
  const b = 2;
  const expected = 3;

  expect(divide(a, b)).toBe(expected);
});

test("divide by zero throws error", () => {
  expect(() => divide(10, 0)).toThrow("Division by zero is not allowed");
});
