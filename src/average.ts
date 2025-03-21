export function mean(numbers: number[]): number {
  let sum: number = 0;
  for (let number of numbers) {
    sum += number;
  }
  
  if (sum === 0) {
    throw new Error("List cant be processed")
  }

  const mean: number = sum / numbers.length;
  return mean;
}
