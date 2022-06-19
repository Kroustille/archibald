import { Ingredient } from '@/domain/models/ingredient'

export class Recipe {
  public constructor(
    private ingredients: Ingredient[]
  ) {
  }

  public getLowestCraftPrice(): number {
    return this.ingredients.reduce((sum, ingredient) => (sum + ingredient.getLowestPrice()), 0)
  }
}
