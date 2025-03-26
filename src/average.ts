export function mean(numbers: number[]): number {
  if (numbers.length === 0) {
    throw Error("No numbers in the array")
  } 
  let sum: number = 0;
  for (let number of numbers) {
    sum += number;
  }
  const mean: number = sum / numbers.length;
  return mean;
}

export function median(numbers: number[]): number {
  if (numbers.length === 0) {
    throw Error("No numbers in the array")
  } 
  numbers.sort((a, b) => a - b)
  
  if (numbers.length % 2 === 0) {
    return (numbers[numbers.length / 2 - 1] + numbers[numbers.length / 2]) / 2
  } else {
    return (numbers[numbers.length / 2 - 0.5])
  }
}