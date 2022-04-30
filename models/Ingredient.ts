import { Product } from 'models/Product'

export interface Ingredient {
  product: Product
  count: number
}