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
  const expected: number = 2;

  // Act
  const actual: number = subtract(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("Multiply six with three is eighteen", () => {
  //Arrange
  const a: number = 6;
  const b: number = 3;
  const expected: number = 18;

  // Act
  const actual: number = multiply(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("Divide eight with two is four", () => {
  //Arrange
  const a: number = 8;
  const b: number = 2;
  const expected: number = 4;

  // Act
  const actual: number = divide(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("Divide by zero", () => {
  //Arrange
  const a: number = 8;
  const b: number = 0;

  // Act

  // Assert
  expect(() => {
    divide(a, b);
  }).toThrow();
});