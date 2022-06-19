import { BatchPrices } from '@/domain/models/prices'
import { Item } from '@/domain/models/item'

export class App {
  createItem(label: string): Item {
    const id = 'new random id'
    return new Item(
      id,
      label,
      new BatchPrices()
    )
  }
}
