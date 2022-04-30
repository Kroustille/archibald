import { Ingredient } from '@/models/ingredient'

export interface Recipe {
  id: string
  label: string
  ingredients: Ingredient[]
}