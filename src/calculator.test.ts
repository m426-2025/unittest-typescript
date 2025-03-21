import { add, subtract, multiply, divide } from "./calculator";

test("add three to one is four", () => {
  // Arrange
  const a: number = 1;
  const b: number = 3;
  const expected: number = 4;

  // Act
  const actual = add(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("subtract four from three is minus one", () => {
  // Arrange
  const a: number = 3;
  const b: number = 4;
  const expected: number = -1;

  // Act
  const actual: number = subtract(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("multiply three by four is twelve", () => {
  //Arrange
  const a: number = 3;
  const b: number = 4;
  const expected: number = 12;

  //Act
  const actual: number = multiply(a, b);

  //Assert
  expect(actual).toBe(expected);
});

test("divide fifteen by five is three", () => {
  //Arrange
  const a: number = 15;
  const b: number = 5;
  const expected: number = 3;

  //Act
  const actual: number = divide(a, b);

  //Assert
  expect(actual).toBe(expected);
});