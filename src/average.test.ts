import { mean, median, mode, standardDeviation } from "./average";

test("test mean of two numbers", () => {
  // Arrange
  const numbers = [1, 4];
  const expected = 2.5;

  // Act
  const actual = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test mean of five numbers", () => {
  // Arrange
  const numbers = [2, 4, 6, 8, 10];
  // (2+4+6+8+10)=30/5=6
  const expected = 6;

  // Act
  const actual = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test mean of no numbers throws error", () => {
  // Arrange
  const numbers: number[] = [];

  // Act & Assert
  expect(() => {
    mean(numbers);
  }).toThrow("Cannot compute mean of an empty array!");
});

test("test median for odd number of elements", () => {
  // Arrange
  const numbers = [1, 2, 6, 7, 8];
  const expected = 6; // (Mitte)

  // Act
  const actual = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test median for even number of elements", () => {
  // Arrange
  const numbers = [1, 2, 5, 6, 7, 8];
  // zwei mittlere Werte: 5, 6 => (5+6)/2 = 5.5
  const expected = 5.5;

  // Act
  const actual = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test median for no elements throws error", () => {
  // Arrange
  const numbers: number[] = [];

  // Act & Assert
  expect(() => {
    median(numbers);
  }).toThrow("Cannot compute median of an empty array!");
});

test("test mode with single value array", () => {
  // [1] => mode: [1]
  const numbers = [1];
  const expected = [1];

  // Act
  const actual = mode(numbers);

  // Assert
  expect(actual).toEqual(expected);
});

test("test mode with repeating values", () => {
  // [1,1,2,2,3] => 1 und 2 am häufigsten => mode: [1,2]
  const numbers = [1, 1, 2, 2, 3];
  const expected = [1, 2];

  // Act
  const actual = mode(numbers);

  // Assert
  // Sort der Arrays, weil Reihenfolge egal
  expect(actual.sort()).toEqual(expected.sort());
});

test("test mode with all repeated equally", () => {
  // [1,2,3] alle gleich oft => [1,2,3]
  const numbers = [1, 2, 3];
  const expected = [1, 2, 3];

  // Act
  const actual = mode(numbers);

  // Assert
  expect(actual.sort()).toEqual(expected.sort());
});

test("test mode throws error on empty array", () => {
  const numbers: number[] = [];

  expect(() => {
    mode(numbers);
  }).toThrow("Cannot compute mode of an empty array!");
});

test("test standard deviation of empty array throws error", () => {
  const numbers: number[] = [];

  expect(() => {
    standardDeviation(numbers);
  }).toThrow("Cannot compute standard deviation of an empty array!");
});

test("test standard deviation of single value array is zero", () => {
  // Nur ein Wert => sd=0
  const numbers = [5];
  const expected = 0;

  const actual = standardDeviation(numbers);
  expect(actual).toBe(expected);
});

test("test standard deviation of [1,3] is 1", () => {
  // mean=2, Abweichungen => (1-2)^2=1, (3-2)^2=1 => sum=2 => /2=1 => sqrt(1)=1
  const numbers = [1, 3];
  const expected = 1;

  const actual = standardDeviation(numbers);
  expect(actual).toBe(expected);
});

test("test standard deviation of [1,5] is 2", () => {
  const numbers = [1, 5];
  const expected = 2;
  
  const actual = standardDeviation(numbers);
  expect(actual).toBe(expected);
});

test("test standard deviation of [1,2,3,4,5] is about 1.414", () => {
  const numbers = [1, 2, 3, 4, 5];
  
  const actual = standardDeviation(numbers);
  expect(actual).toBeGreaterThan(1.41);
  expect(actual).toBeLessThan(1.42);
});


