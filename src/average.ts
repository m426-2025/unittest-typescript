export function mean(numbers: number[]): number {
  let sum: number = 0;
  for (let number of numbers) {
    sum += number;
  }
  const mean: number = sum / numbers.length;

  if (numbers.length == 0) {
    throw new Error("No numbers entered")
  }

  return mean;
}


export function median(numbers: number[]): number {
  if (numbers.length == 0) {
    throw new Error("No numbers entered");
  }

  let mid = Math.floor(numbers.length / 2);
  let sorted = [...numbers].sort((a, b) => a - b);

  if (numbers.length % 2 !== 0) {
    return sorted[mid];
  } else {
    let left = sorted[mid - 1];
    let right = sorted[mid];
    return (left + right) / 2;
  }
}