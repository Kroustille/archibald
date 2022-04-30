import { Ingredient } from '@/models/ingredient'
import { ProductDetail } from '@/components/products/detail'
import { safeParseInt } from '@/helpers/parse'

interface Props {
  ingredient: Ingredient
  onChange(ingredient:Ingredient): void
}

export const IngredientDetail = ({ ingredient, onChange }: Props) => {
  return <article>
    <input type="number" value={ingredient.count} onChange={event => onChange({
      ...ingredient,
      count: safeParseInt(event.target.value)
    })}/> 
    <ProductDetail product={ingredient.product} onChange={product => onChange({
      ...ingredient,
      product
    })}
    />
  </article>
}