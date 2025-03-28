export function mean(numbers: number[]): number {
  if (numbers.length !== 0) {
    let sum: number = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum / numbers.length;
  }
  throw new Error("Empty Array")
}

export function median(numbers: number[]): number {
  if (numbers.length !== 0) {
    const sortedNumbers = [...numbers].sort((a, b) => a - b)
    const middle = Math.floor(sortedNumbers.length / 2);
    if (sortedNumbers.length % 2 === 0) {
      return (sortedNumbers[middle - 1] + sortedNumbers[middle]) / 2;
    } else {
      return sortedNumbers[middle];
    }
  }
  throw new Error("No Elements");
}
