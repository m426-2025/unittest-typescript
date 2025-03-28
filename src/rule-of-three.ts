export class RuleOfThree {
  constructor(
    private totalPrice: number,
    private amount: number,
  ) {}

  public calculateFor(wantedAmount: number): number {
    const singleUnitPrice = this.totalPrice / this.amount;
    return singleUnitPrice * wantedAmount;
  }
}
