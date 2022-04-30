import { Ingredient } from '@/models/Ingredient'

interface Props {
  ingredient: Ingredient
  onChange(ingredient:Ingredient): void
}

export const IngredientDetail = ({ ingredient, onChange }: Props) => {
  return <article>
    <input type="number" value={ingredient.count} onChange={event => onChange({
      ...ingredient,
      count: Number.parseInt(event.target.value)
    })}/> {ingredient.product.label}
  </article>
}