import { Item } from '@/models/item'

export interface Ingredient {
  item: Item
  count: number
  is_handcrafted: boolean
}

export function computePrice(ingredient: Ingredient): number {
  if (!ingredient.is_handcrafted) {
    return ingredient.count * ingredient.item.pricePerBatch / ingredient.item.batchSize
  }

  return ingredient.item.ingredients.reduce((sum, current_ingredient) => {
    return sum + computePrice(current_ingredient)
  }, 0)
}