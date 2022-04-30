import { Ingredient } from '@/models/ingredient'
import { NumericInput } from '@/ui/NumericInput'
import { ProductDetail } from '@/components/products/detail'

interface Props {
  ingredient: Ingredient
  onChange(ingredient:Ingredient): void
}

export const IngredientDetail = ({ ingredient, onChange }: Props) => {
  return <article>
    <NumericInput value={ingredient.count} onChange={count => onChange({
      ...ingredient, 
      count
    })}/>

    <ProductDetail product={ingredient.product} onChange={product => onChange({
      ...ingredient,
      product
    })}
    />
  </article>
}