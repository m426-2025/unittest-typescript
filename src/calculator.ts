export function add(summandA: number, summandB: number): number {
  return summandA + summandB;
}

export function subtract(minuend: number, subtrahend: number): number {
  return minuend - subtrahend;
}

export function multiply(multiplicand: number, multiplier: number): number {
  return multiplicand * multiplier;
}

export function divide(dividend: number, divisor: number): number {
  if (divisor === 0) {
    throw new Error("Error Domain");
  }
  return dividend / divisor;
}