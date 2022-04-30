import { Item } from '@/models/item'

export interface Step {
  level: number
  items: Item[]
}