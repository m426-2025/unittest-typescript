import { add, subtract, multiplication, division } from "./calculator";

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

test("multiply one and six is six", () => {
  // Arrange
  const a: number = 1;
  const b: number = 6;
  const expected: number = 6;

  // Act
  const actual: number = multiplication(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("divide twelve to four is three", () => {
  // Arrange
  const a: number = 12;
  const b: number = 4;
  const expected: number = 3;

  // Act
  const actual: number = division(a, b);

  // Assert
  expect(actual).toBe(expected);
});


test("divide by zero throws an error", () => {
  // Arrange
  const a: number = 42; // beliebiger Dividenden
  const b: number = 0;  // Divisor ist 0

  // Act & Assert
  expect(() => division(a, b)).toThrowError("Division durch 0 ist nicht erlaubt");
});