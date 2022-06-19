import { Ingredient } from '@/domain/models/ingredient'

interface Props {
  ingredient: Ingredient
  onChange: (ingredient: Ingredient) => void
}

export const ItemIngredientsEditIsHandcrafted = ({ ingredient, onChange }: Props) => {
  const checkbox_id = `ingredient-${ingredient.item_id}-handcrafted`;

  return <span>
  <label htmlFor={checkbox_id}>Fait maison</label>
  <input
    id={checkbox_id}
    checked={ingredient.is_handcrafted}
    type="checkbox"
    onChange={() => onChange({
      ...ingredient,
      is_handcrafted: !ingredient.is_handcrafted
    })}/>
</span>
}
