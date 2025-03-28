export function add(summandA: number, summandB: number): number {
  return summandA + summandB;
}

export function subtract(minuend: number, subtrahend: number): number {
  return minuend - subtrahend;
}

export function multiply(multiplicator1: number, multiplicator2: number): number {
  return multiplicator1 * multiplicator2;
}

export function divide(dividend: number, divisor: number): number {
  if (divisor === 0) {
    throw new Error("Cannot divide by zero");
  }
  return dividend / divisor;
}
