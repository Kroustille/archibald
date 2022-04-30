import { Recipe } from '@/models/Recipe'

export interface Product {
  id: string
  label: string
  recipe?: Recipe
}