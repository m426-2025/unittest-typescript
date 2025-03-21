import {add, multiply, subtract} from "./calculator";

test("add three to six is nine", () => {
  // Arrange
  const a: number = 6;
  const b: number = 3;
  const expected: number = 9;

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

test("the product of five and three is fifteen", () => {
  // Arrange
  const a: number = 5;
  const b: number = 3;
  const expected: number = 15;

  // Act
  const actual: number = multiply(a, b);

  // Assert
  expect(actual).toBe(expected);
});
