export function mean(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Liste darf nicht leer sein");
  }
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}
