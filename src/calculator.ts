export function add(summandA: number, summandB: number): number {
  return summandA + summandB;
}

export function subtract(minuend: number, subtrahend: number): number {
  return minuend - subtrahend;
}

export function multiply(productA: number, productB: number): number {
  return productA * productB
}

export function division(dividen: number, divisor: number): number {
  if (divisor == 0)
  {
    throw new Error("Division durch 0 nicht erlaubt") 
  }
  
  return dividen / divisor
}