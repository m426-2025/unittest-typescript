import { mean, median, modus, stdDev } from "./average";

test("test mean of two numbers", () => {
  // Arrange
  const numbers: number[] = [3, 6];
  const expected: number = 4.5;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test mean of five numbers", () => {
  // Arrange
  const numbers: number[] = [1, 2, 3, 4, 5];
  const expected: number = 3;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test mean of no numbers", () => {
  // Arrange
  const numbers: number[] = [];

  // Assert
  expect(() => { mean(numbers) }).toThrow("Cannot calculate mean of zero numbers");
});

test("test median for odd number of elements", () => {
  // Arrange
  const numbers: number[] = [1, 2, 3, 4, 5];
  const expected: number = 3;

  // Act
  const actual: number = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test median for even number of elements", () => {
  // Arrange
  const numbers: number[] = [1, 2, 3, 4];
  const expected: number = 2.5;

  // Act
  const actual: number = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test median of no numbers", () => {
  // Arrange
  const numbers: number[] = [];

  // Assert
  expect(() => { median(numbers) }).toThrow("Cannot calculate median of zero numbers");
});

test("test median of unsorted numbers", () => {
  // Arrange
  const numbers: number[] = [3, 1, 4, 2, 5];
  const expected: number = 3;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test modus of one number", () => {
  // Arrange
  const numbers: number[] = [3];
  const expected: number[] = [3];

  // Act
  const actual: number[] = modus(numbers);

  // Assert
  expect(actual).toStrictEqual(expected);
});

test("test modus of two numbers", () => {
  // Arrange
  const numbers: number[] = [3, 3];
  const expected: number[] = [3];

  // Act
  const actual: number[] = modus(numbers);

  // Assert
  expect(actual).toStrictEqual(expected);
});

test("test modus of three numbers", () => {
  // Arrange
  const numbers: number[] = [3, 3, 4];
  const expected: number[] = [3];

  // Act
  const actual: number[] = modus(numbers);

  // Assert
  expect(actual).toStrictEqual(expected);
});

test("test modus of four numbers", () => {
  // Arrange
  const numbers: number[] = [3, 3, 4, 4];
  const expected: number[] = [3, 4];

  // Act
  const actual: number[] = modus(numbers);

  // Assert
  expect(actual).toStrictEqual(expected);
});

test("test modus of [1, 1, 2, 2, 3, 3, 3, 3] numbers", () => {
  // Arrange
  const numbers: number[] = [1, 1, 2, 2, 3, 3, 3, 3];
  const expected: number[] = [3];

  // Act
  const actual: number[] = modus(numbers);

  // Assert
  expect(actual).toStrictEqual(expected);
});

test("test stdDev of one number", () => {
  // Arrange
  const numbers: number[] = [3];
  const expected: number = 0;

  // Act
  const actual: number = stdDev(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test stdDev of [1, 3]", () => {
  // Arrange
  const numbers: number[] = [1, 3];
  const expected: number = 1;

  // Act
  const actual: number = stdDev(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test stdDev of [1, 5]", () => {
  // Arrange
  const numbers: number[] = [1, 5];
  const expected: number = 2;

  // Act
  const actual: number = stdDev(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test stdDev of [1, 2, 3, 4, 5]", () => {
  // Arrange
  const numbers: number[] = [1, 2, 3, 4, 5];
  const expected: number = 1.4142135623730951;

  // Act
  const actual: number = stdDev(numbers);

  // Assert
  expect(actual).toBe(expected);
});