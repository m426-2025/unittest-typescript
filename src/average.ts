export function mean(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Cannot calculate mean of an empty list");
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
    throw new Error("Cannot calculate median of an empty list");
  }

  const sortedNumbers = [...numbers].sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedNumbers.length / 2);

  if (sortedNumbers.length % 2 === 1) {
    return sortedNumbers[middleIndex];
  } else {
    return (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
  }
}