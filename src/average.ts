export function mean(numbers: number[]): number {
  let sum: number = 0;
  for (let number of numbers) {
    sum += number;
  }
  const mean: number = sum / numbers.length;
  if (numbers.length === 0) {
    throw new Error('Cannot calculate mean of empty list');
  }
  return mean;
}
