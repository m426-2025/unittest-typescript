import { median } from "./median";

// Aufgabe 6.1: Test median for odd number of elements
test("median for odd number of elements", () => {
  // Arrange
  const numbers = [1, 2, 6, 7, 8];
  const expected = 6;

  // Act
  const actual = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});

// Aufgabe 6.1: Test median for even number of elements
test("median for even number of elements", () => {
  // Arrange
  const numbers = [1, 2, 5, 6, 7, 8];
  const expected = 5.5;

  // Act
  const actual = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});

// Aufgabe 6.1: Test median for no elements
test("median for no elements throws an error", () => {
  // Arrange
  const numbers: number[] = [];
  const expectedMessage = "Cannot calculate median of empty list";

  // Act
  const action = () => median(numbers);

  // Assert
  expect(action).toThrowError(expectedMessage);
});