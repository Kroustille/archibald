import { Ingredient } from '@/models/ingredient'
import { IngredientDetail } from '@/components/item/ingredients/detail'
import { Item } from '@/models/item'
import { updateItem } from '@/store/items/slice'
import { useAppDispatch } from '@/hooks/store'

interface Props {
  item: Item
}

export const ItemDetail = ({ item }: Props) => {
  const dispatch = useAppDispatch()
  const handleIngredientChange = (new_ingredient: Ingredient, index: number) => {
    const new_ingredients = [...item.ingredients]
    new_ingredients[index] = new_ingredient
    
    dispatch(updateItem({
      item: {
        ...item,
        ingredients: new_ingredients
      }
    }))
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