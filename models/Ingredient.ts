import { Item } from '@/models/item'

export interface Ingredient {
  item: Item
  count: number
  is_handcrafted: boolean
}