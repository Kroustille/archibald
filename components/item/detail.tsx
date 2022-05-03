import { selectItem, updateItem } from '@/store/items/slice'
import { useAppDispatch, useAppSelector } from '@/hooks/store'

import { Ingredient } from '@/models/ingredient'
import { ItemIngredientsDetail } from '@/components/item/ingredients/detail'

interface Props {
  item_id: string
}

export const ItemDetail = ({ item_id }: Props) => {
  const dispatch = useAppDispatch()
  const item = useAppSelector(state => selectItem(state, item_id))
  if (!item) {
    return null
  }

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

  return item ? <article>
    <h2>{item.label}</h2>
    <form>
      {item.ingredients.map((ingredient, index) => <ItemIngredientsDetail
        key={ingredient.item_id}
        ingredient={ingredient}
        onChange={new_ingredient => handleIngredientChange(new_ingredient, index)}
      />)}
    </form>
  </article> : null
}
