import { Item } from '@/models/item'
import { computePrice } from '@/models/ingredient'

interface Props {
  item: Item
}

export const Results = ({ item }: Props) => {
  const total_without_taxes = item.ingredients.reduce((result, ingredient) => result + computePrice(ingredient), 0)
  const total_with_taxes = total_without_taxes * 1.02
  const rounded_value = Math.ceil(total_with_taxes * 100 ) / 100
  
  return <footer>
    <h1>Sortie : {rounded_value}</h1>

    <h2>Ingrédients utilisés</h2>
    <ul>
      {
        item.ingredients.map((ingredient) => <li key={ingredient.item.id}>
          {ingredient.item.label} 
          {
            ingredient.is_handcrafted ? <ul>
              {ingredient.item.ingredients.map(i => <li key={i.item.id}>
                {i.item.label} {computePrice(i)}
                </li>
                )
              }
            </ul> : computePrice(ingredient)
          }
        </li>)
      }
    </ul>
  </footer>
}