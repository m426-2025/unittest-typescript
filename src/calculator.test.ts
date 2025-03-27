import { add, subtract, multiply, divide } from "./calculator";

test("add three to four is seven", () => {
  // Arrange
  const a: number = 3;
  const b: number = 4;
  const expected: number = 7;

  // Act
  const actual = add(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("subtract two from five is three", () => {  
  // Arrange
  const a: number = 5;
  const b: number = 2;
  const expected: number = 3;

  // Act
  const actual: number = subtract(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("multiply four to three is twelve", () => { 
  // Arrange
  const a: number = 4;
  const b: number = 3;
  const expected: number = 12;

  // Act
  const actual: number = multiply(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("divide three from twelve is four", () => { 
  // Arrange
  const a: number = 12;
  const b: number = 3;
  const expected: number = 4;

  // Act
  const actual: number = divide(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("divide zero from twelve is Infinity", () => {
  // Arrange
  const a: number = 12;
  const b: number = 0;
  const expected: number = Infinity;

  // Act
  const actual: number = divide(a, b);

  // Assert
  expect(actual).toBe(expected);
});
