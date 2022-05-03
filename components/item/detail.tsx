import { Ingredient } from '@/models/ingredient'
import { IngredientDetail } from '@/components/ingredients/detail'
import { Item } from '@/models/item'

interface Props {
  item: Item
  onChange: (item: Item) => void
}

export const ItemDetail = ({ item, onChange }: Props) => {
  const handleIngredientChange = (new_ingredient: Ingredient, index: number) => {
    const new_ingredients = [...item.ingredients]
    new_ingredients[index] = new_ingredient
    onChange({
      ...item,
      ingredients: new_ingredients
    })
  }

  return <article>
    <h2>{item.label}</h2>
    <form>
      {item.ingredients.map((ingredient, index) => <IngredientDetail 
        key={ingredient.item_id} 
        ingredient={ingredient}
        onChange={new_ingredient => handleIngredientChange(new_ingredient, index)}
      />)}
    </form>
  </article>
}