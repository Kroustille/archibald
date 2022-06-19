
export class BatchPrices {
  private price_per_unit: number
  private price_per_ten: number
  private price_per_hundred: number

  public constructor(
    price_per_unit: number = 0,
    price_per_ten: number = 0,
    price_per_hundred: number = 0
  ) {
    this.price_per_unit = price_per_unit
    this.price_per_ten = price_per_ten
    this.price_per_hundred = price_per_hundred
  }

  public updateUnitPrice(price: number): BatchPrices {
    return {
      ...this,
      price_per_unit: price
    }
  }

  public getLowestUnitPrice(): number {
    return [this.price_per_unit, this.price_per_ten / 10, this.price_per_hundred / 100]
      .filter(Boolean)
      .reduce((lowest, price) => price < lowest ? price : lowest, Number.MAX_VALUE)
  }
}
