import { mean, median, mode, standardDeviation } from "./average";

test("test mean of two numbers", () => {
  // Arrange
  const numbers: number[] = [1, 4];
  const expected: number = 2.5;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test mean of five numbers", () => {
  // Arrange
  const numbers: number[] = [2, 4, 6, 8, 10];
  const expected: number = 6;
  
  // Act
  const actual: number = mean(numbers);
  
  // Assert
  expect(actual).toBe(expected);
});

test("test mean of no numbers throws error", () => {
  // Arrange
  const numbers: number[] = [];
  
  // Act & Assert
  expect(() => mean(numbers)).toThrow("Liste darf nicht leer sein.");
});

test("test median for odd number of elements", () => {
  // Arrange
  const numbers: number[] = [3, 1, 4, 5, 2];
  const expected: number = 3;
  
  // Act
  const actual: number = median(numbers);
  
  // Assert
  expect(actual).toBe(expected);
});

test("test median for even number of elements", () => {
  // Arrange
  const numbers: number[] = [1, 2, 6, 7, 8, 9];
  const expected: number = 6.5;
  
  // Act
  const actual: number = median(numbers);
  
  // Assert
  expect(actual).toBe(expected);
});

test("test median for no elements throws error", () => {
  // Arrange
  const numbers: number[] = [];
  
  // Act & Assert
  expect(() => median(numbers)).toThrow("Median ist für eine leere Liste nicht definiert.");
});

test("test mode for single element", () => {
  // Arrange
  const numbers: number[] = [1];
  const expected: number[] = [1];
  
  // Act
  const actual: number[] = mode(numbers);
  
  // Assert
  expect(actual).toEqual(expected);
});

test("test mode for multiple occurrences", () => {
  // Arrange
  const numbers: number[] = [1, 1, 2, 2, 3];
  const expected: number[] = [1, 2];
  
  // Act
  const actual: number[] = mode(numbers);
  
  // Assert
  expect(actual).toEqual(expected);
});

test("Standardabweichung einer leeren Liste", () => {
  // Arrange
  const numbers: number[] = [];
  
  // Act & Assert
  expect(() => standardDeviation(numbers)).toThrow("Standardabweichung ist für eine leere Liste nicht definiert.");
});

test("Standardabweichung für einen einzelnen Wert", () => {
  // Arrange
  const numbers: number[] = [5];
  const expected: number = 0;
  
  // Act
  const actual: number = standardDeviation(numbers);
  
  // Assert
  expect(actual).toBe(expected);
});

test("Standardabweichung der Zahlenreihe [1, 3]", () => {
  // Arrange
  const numbers: number[] = [1, 3];
  const expected: number = 1;
  
  // Act
  const actual: number = standardDeviation(numbers);
  
  // Assert
  expect(actual).toBe(expected);
});

test("Standardabweichung der Zahlenreihe [1, 5]", () => {
  // Arrange
  const numbers: number[] = [1, 5];
  const expected: number = 2;
  
  // Act
  const actual: number = standardDeviation(numbers);
  
  // Assert
  expect(actual).toBe(expected);
});

test("Standardabweichung der Zahlenreihe [1, 2, 3, 4, 5]", () => {
  // Arrange
  const numbers: number[] = [1, 2, 3, 4, 5];
  const expectedMin: number = 1.41;
  const expectedMax: number = 1.42;
  
  // Act
  const actual: number = standardDeviation(numbers);
  
  // Assert
  expect(actual).toBeGreaterThan(expectedMin);
  expect(actual).toBeLessThan(expectedMax);
});
