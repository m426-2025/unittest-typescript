export function add(summandA: number, summandB: number): number {
  return summandA + summandB;
}

export function subtract(minuend: number, subtrahend: number): number {
  return minuend - subtrahend;
}

export function multiply(mulitplierA: number, multiplierB: number): number {
  return mulitplierA * multiplierB;
}

export function divide(dividend: number, divider: number): number {
  if (divider == 0){
    throw new Error("Cannot divide by 0")
  }
  return dividend / divider;
}