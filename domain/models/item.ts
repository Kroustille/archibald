import { BatchPrices } from '@/domain/models/prices'
import { Recipe } from '@/domain/models/recipe'

export const POSSIBLE_BATCH_SIZES = [1, 10, 100]

export interface ItemConstructorParams {
  label: string,
  prices: BatchPrices,
  recipe?: Recipe,
  is_handcrafted?: boolean,
  is_handpicked?: boolean
}

export class Item {
  private id: string
  private label: string
  private prices: BatchPrices
  private recipe?: Recipe
  private is_handcrafted: boolean
  private is_handpicked: boolean

  public constructor({
    label,
    prices,
    recipe,
    is_handcrafted,
    is_handpicked
  }: ItemConstructorParams) {
    this.id = label.toLowerCase().replace(' ', '_')
    this.label = label
    this.prices = prices
    this.recipe = recipe
    this.is_handcrafted = !!is_handcrafted
    this.is_handpicked = !!is_handpicked
  }

  public getId(): string {
    return this.id
  }

  public getLabel(): string {
    return this.label
  }

  public isCraftable(): boolean {
    return Boolean(this.recipe && this.recipe)
  }

  public getLowestPrice(): number {
    if (this.is_handpicked) {
      return 0
    }

    return this.is_handcrafted ?
      this.getLowestCraftPrice() :
      this.getLowestPurchasePrice()
  }

  private getLowestCraftPrice(): number {
    return this.recipe?.getLowestCraftPrice() ?? 0
  }

  private getLowestPurchasePrice(): number {
    return this.prices.getLowestUnitPrice()
  }
}
