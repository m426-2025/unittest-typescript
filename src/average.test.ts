import { mean, meanOfFive, meanOfNoNr, medianOfNr } from "./average";

test("test mean of two numbers", () => {
  // Arrange
  const numbers: number[] = [1, 3];
  const expected: number = 2;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test mean of five numbers", () => {
  // Arrange
  const numbers: number[] = [5,5,5,5,5];
  const expected: number = 5;

  // Act
  const actual: number = meanOfFive(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test mean of no numbers", () => {
  // Arrange
  const numbers: number[] = [];
  const expected: number = 0;
  expect(() => {
    // Act
    meanOfNoNr(numbers);
  }).toThrow("No numbers provided");
  // Assert

});

test("test median of no numbers", () => {
  // Arrange
  const numbers: number[] = [];
  const expected: number = 0;
  expect(() => {
    // Act
    medianOfNr(numbers);
  }).toThrow("No numbers provided");
  // Assert

});

test("test median of numbers", () => {
  // Arrange
  const numbers: number[] = [1,2,3,4,5];
  const expected: number = 3;
  const actual: number = medianOfNr(numbers);

  // Assert
  expect(actual).toBe(expected);
  // Assert

});

test("test median of numbers2", () => {
  // Arrange
  const numbers: number[] = [1,2,3,4,5, 6];
  const expected: number = 3;
  const actual: number = medianOfNr(numbers);

  // Assert
  expect(actual).toBe(expected);
  // Assert

});