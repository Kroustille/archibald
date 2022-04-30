import { Ingredient } from '@/models/Ingredient'

export interface Recipe {
  id: string
  label: string
  ingredients: Ingredient[]
}