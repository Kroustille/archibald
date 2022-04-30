import { Recipe } from '@/models/recipe'

export const POSSIBLE_BATCH_SIZES = [1, 10, 100] 

export interface Product {
  id: string
  label: string
  pricePerBatch: number
  batchSize: number
  recipe?: Recipe
}