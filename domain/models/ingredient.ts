import { Item } from '@/domain/models/item'

export class Ingredient {
  private item: Item
  private count: number

  public constructor(
    item: Item,
    count: number,
  ) {
    this.item = item
    this.count = count
  }

  public getLowestPrice() {
    return this.count * this.item.getLowestPrice()
  }
}
