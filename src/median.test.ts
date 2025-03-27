import { median } from "./median";

test("median for odd number of elements", () => {
    // Arrange
    const numbers: number[] = [1, 3, 5, 7, 9];
    const expected: number = 5;
  
    // Act
    const actual: number = median(numbers);
  
    // Assert
    expect(actual).toBe(expected);
  });
  
  test("median for even number of elements", () => {
    // Arrange
    const numbers: number[] = [1, 3, 5, 7, 9, 11];
    const expected: number = 6;
  
    // Act
    const actual: number = median(numbers);
  
    // Assert
    expect(actual).toBe(expected);
  });