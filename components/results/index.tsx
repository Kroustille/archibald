import { Item } from '@/models/item'

interface Props {
  item: Item
}

export const Results = ({ item }: Props) => {
  const total_without_taxes = (item.ingredients ?? []).reduce((result, ingredient) => result + ingredient.count * ingredient.item.pricePerBatch / ingredient.item.batchSize, 0)
  const total_with_taxes = total_without_taxes * 1.02
  const rounded_value = Math.ceil(total_with_taxes * 100 ) / 100
  
  return <footer>
    <h1>Results</h1>
    <p>Prix de rentabilité : {rounded_value}</p>
  </footer>
}