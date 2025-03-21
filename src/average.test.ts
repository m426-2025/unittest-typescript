import { mean , median} from "./average";

test("test mean of two numbers", () => {
  // Arrange
  const numbers: number[] = [3, 4];
  const expected: number = 3.5;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});


test("test mean of five numbers", () => {
  // Arrange
  const numbers: number[] = [3, 4, 3, 6, 1];
  const expected: number = 3.4;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test mean of no numbers", () => {
  // Arrange
  const numbers: number[] = [];

  // Act

  // Assert
  expect(() => mean(numbers)).toThrow();
});









test("test median for odd number of elements", () => {
  // Arrange
  const numbers: number[] = [1, 3, 6, 7, 39];
  const expected: number = 6;


  // Act
  const actual: number = median(numbers);

  // Assert
    expect(actual).toBe(expected);

});

test("test median for even number of elements", () => {
  // Arrange
  const numbers: number[] = [1, 7, 5, 6, 4, 9];
  const expected: number = 5.5;

  // Act
  const actual: number = median(numbers);

  // Assert
    expect(actual).toBe(expected);
});

test("test median for no elements", () => {
  // Arrange
  const numbers: number[] = [];
// Act

  // Assert
   expect(() => median(numbers)).toThrow();

});