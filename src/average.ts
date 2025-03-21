export function mean(numbers: number[]): number {
  let sum: number = 0;
  for (let number of numbers) {
    sum += number;
  }
  if (numbers.length === 0) {
    throw new Error("Divide by zero is not allowed");
  }
  return sum / numbers.length;
}

export function median(numbers: number[]): number {
  numbers = sortArray(numbers);
  while (numbers.length > 2){
    numbers.shift();
    numbers.pop()
  }
  let sum: number = 0;
  for (let number of numbers) {
    sum += number;
  }
  if (numbers.length === 0) {
    throw new Error("Divide by zero is not allowed");
  }
  return sum / numbers.length;
}

function sortArray(numbers: number[]): number[] {
  return [...numbers].sort((a, b) => a - b);
}
