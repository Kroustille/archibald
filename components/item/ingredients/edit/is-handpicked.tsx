import { Ingredient } from '@/models/ingredient'

interface Props {
  ingredient: Ingredient
  onChange: (ingredient: Ingredient) => void
}

export const ItemIngredientsEditIsHandpicked = ({ ingredient, onChange }: Props) => {
  const checkbox_id = `ingredient-${ingredient.item_id}-handpicked`;

  return <span>
  <label htmlFor={checkbox_id}>Fait maison</label>
  <input
    id={checkbox_id}
    value={`${ingredient.is_handpicked}`}
    type="checkbox"
    onChange={() => onChange({
      ...ingredient,
      is_handpicked: !ingredient.is_handpicked
    })}/>
</span>
}
