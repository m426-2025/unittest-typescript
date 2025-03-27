export function median(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error('Cannot calculate median of an empty array');
  }

  numbers.sort((a, b) => a - b);

  const middle = Math.floor(numbers.length / 2);

  if (numbers.length % 2 === 0) {
    return (numbers[middle - 1] + numbers[middle]) / 2;
  } else {
    return numbers[middle];
  }
}
