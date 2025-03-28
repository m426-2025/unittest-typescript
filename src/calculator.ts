export function add(summandA: number, summandB: number): number {
  return summandA + summandB;
}

export function subtract(minuend: number, subtrahend: number): number {
  return minuend - subtrahend;
}

export function multiply(faktorA: number, faktorB: number): number{
  return faktorA * faktorB
}

export function division(divisor: number, dividend: number): number{
  if (dividend === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return divisor / dividend
}