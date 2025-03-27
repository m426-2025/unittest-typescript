export function median(numbers: number[]): number {
    if (numbers.length === 0) {
      throw new Error("Median for empty Arrays is not defined");
    }
 
    const sortedNumbers = numbers.slice().sort((a, b) => a - b);
 
    const middle = Math.floor(sortedNumbers.length / 2);
 
    if (sortedNumbers.length % 2 === 0) {
      return (sortedNumbers[middle - 1] + sortedNumbers[middle]) / 2;
    } else {
      return sortedNumbers[middle];
    }
  }