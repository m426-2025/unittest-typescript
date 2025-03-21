import { median } from "./median";

test("test median for odd number of elements", () => {
  // Arrange
  const numbers: number[] = [5, 5, 9];
  const sortedNumbers: number[] = numbers.sort((n1,n2) => n1 - n2);
  const expected: number = 5;

  // Act
  const actual: number = median(sortedNumbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test median for even number of elements", () => {
    // Arrange
    const numbers: number[] = [3, 3, 1, 1, 3, 1];
    const sortedNumbers: number[] = numbers.sort((n1,n2) => n1 - n2);
    const expected: number = 2;
  
    // Act
    const actual: number = median(sortedNumbers);
  
    // Assert
    expect(actual).toBe(expected);
});

test("test median for no elements", () => {
    // Arrange
    const numbers: number[] = [];
  
    // Act
    function medianForNone() {
        median(numbers);
    } 
  
    // Assert
    expect(medianForNone).toThrow("Error undefined");
});