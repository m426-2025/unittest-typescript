import { mean, median } from "./average";

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

    //Assert
    expect(() => mean(numbers)).toThrow("The numbers can't be zero.");

  })

test("test median of odd number of elements", ()=>{

  //Arrange
  const numbers: number[] = [1, 2, 3, 4, 5];
  const expected: number = 3;

  //Act
  const actual: number = median(numbers);

  //Assert
  expect(actual).toBe(expected);
});

test("test median of even number of elements", ()=>{
  
    //Arrange
    const numbers: number[] = [1, 2, 3, 4];
    const expected: number = 2.5;
  
    //Act
    const actual: number = median(numbers);
  
    //Assert
    expect(actual).toBe(expected);
});

test("test median of zero number of elements", () =>{
  //Arrange
  const numbers: number[] = [];

  //Assert
  expect(() => median(numbers)).toThrow("The numbers can't be zero.");
});

test("test median of random numbers", () =>{
  //Arrange
  const numbers: number[] = [4, 2, 3, 1, 5];
  const expected: number = 3;

  //Act
  const actual: number = median(numbers);

  //Assert
  expect(actual).toBe(expected);
});