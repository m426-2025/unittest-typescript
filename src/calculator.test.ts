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
  const a: number = 16;
  const b: number = 6
  const expected: number = 10;

  // Act
  const actual: number = subtract(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("multiply 2 * 5 is 10", () => {
  // Arrange
  const a: number = 2;
  const b: number = 5;
  const expected: number = 10;

  // Act
  const actual: number = multiply(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("devide 10 / 2 is 5", () => {
  // Arrange
  const a: number = 10;
  const b: number = 2;
  const expected: number = 5;

  // Act
  const actual: number = divide(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("devide 10 / 0 is Not Allowed", () => {
  // Arrange
  const a: number = 10;
  const b: number = 0;

  // Assert
  expect(() => { divide(a, b) }).toThrow("by zero");
});
