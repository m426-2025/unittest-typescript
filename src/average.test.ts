import { mean } from "./average";

test("test mean of two numbers", () => {
  // Arrange
  const numbers: number[] = [2, 8];
  const expected: number = 5;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test mean of five numbers", () => {
  // Arrange
  const numbers: number[] = [1, 2, 3, 4, 5];
  const expected: number = 3;

  //Act 
  const actual: number = mean(numbers);

  //Assert
  expect(actual).toBe(expected);
  });

  test("test mean of zero numbers", () =>{
  
    //Arrange
    const numbers: number[] = [];
    const expected: number = 0;

    //Assert
    expect(() => mean(numbers)).toThrow("The numbers can't be zero.");

  })