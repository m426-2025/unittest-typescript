import { add, subtract } from "./calculator";

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

test("multiply 3 and 4 is 12", () => {
  expect(multiply(3, 4)).toBe(12);
});

test("divide 8 by 4 is 2", () => {
  expect(divide(8, 4)).toBe(2);
});

test("divide by 0 throws error", () => {
  expect(() => divide(1, 0)).toThrow("Division by zero is not allowed");
});
