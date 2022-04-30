import { Ingredient } from '@/models/ingredient'

export const POSSIBLE_BATCH_SIZES = [1, 10, 100] 

export interface Item {
  id: string
  label: string
  pricePerBatch: number
  batchSize: number
  ingredients: Ingredient[]
}