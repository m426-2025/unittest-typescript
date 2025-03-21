import { add, subtract, multiply, divide } from "./calculator";

test("add three to two is five", () => {
  // Arrange
  const a = 2;
  const b = 3;
  const expected = 5;

  // Act
  const actual = add(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("subtract four from six is two", () => {
  // Arrange
  const a = 6;
  const b = 4;
  const expected = 2;

  // Act
  const actual = subtract(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("multiply three by two is six", () => {
  // Arrange
  const a = 3;
  const b = 2;
  const expected = 6;

  // Act
  const actual = multiply(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("divide six by two is three", () => {
  // Arrange
  const a = 6;
  const b = 2;
  const expected = 3;

  // Act
  const actual = divide(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("divide by zero throws an error", () => {
  // Arrange
  const a = 6;
  const b = 0;

  // Act & Assert
  expect(() => {
    divide(a, b);
  }).toThrow("Division by zero is not allowed!");
});
