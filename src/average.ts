export function mean(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("The numbers can't be zero.");
  }
  let sum: number = 0;
  for (let number of numbers) {
    sum += number;
  }
  const mean: number = sum / numbers.length;
  return mean;
}

export function median(numbers: number[]): number{
  if (numbers.length === 0){
    throw new Error("The numbers can't be zero.");
  }
  numbers.sort((a, b) => a - b);
  const middle: number = Math.floor(numbers.length / 2);
  if (numbers.length % 2 === 0){
    return mean([numbers[middle - 1], numbers[middle]]);
  }
  return numbers[middle];
}
