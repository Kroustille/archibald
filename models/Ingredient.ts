import { Product } from '@/models/product'

export interface Ingredient {
  product: Product
  count: number
}