import { add, subtract, multiply, division } from "./calculator";

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
  const a: number = 5;
  const b: number = 4;
  const expected: number = 1;

  // Act
  const actual: number = subtract(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("multiply four by two is eight", () => {
  // Arrange
  const a: number = 4;
  const b: number = 2;
  const expected: number = 8;

  // Act
  const actual: number = multiply(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("division four by two is two", () => {
  // Arrange
  const a: number = 4;
  const b: number = 2;
  const expected: number = 2;

  // Act
  const actual: number = division(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("division by zero throws an error", () => {
  // Arrange
  const a: number = 10;
  const b: number = 0;

  // Assert & Act
  expect(() => division(a, b)).toThrowError("Division durch 0 ist nicht erlaubt!");
});
