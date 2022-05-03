import { selectItem, selectUnitPrice } from '@/store/items/slice'

import { Ingredient } from '@/models/ingredient'
import { ItemEditBatchSize } from '@/components/item/edit/batch-size'
import { ItemEditPricePerBatch } from '@/components/item/edit/price-per-batch'
import { ItemIngredientsEditIsHandcrafted } from '@/components/item/ingredients/edit/is-handcrafted'
import styles from './styles.module.css'
import { useAppSelector } from '@/hooks/store'

interface Props {
  ingredient: Ingredient
  className?: string
  onChange(ingredient: Ingredient): void
}

export const ItemIngredientsDetail = ({ className, ingredient, onChange }: Props) => {
  const item = useAppSelector(state => selectItem(state, ingredient.item_id))
  const item_unit_price = useAppSelector(state => selectUnitPrice(state, ingredient.item_id))
  if (!item) {
    return null
  }

  const checkbox_id = `ingredient-${ingredient.item_id}`;

  return <fieldset className={className}>
    <legend>{ingredient.count} X&nbsp;{item.label} = {ingredient.count * (ingredient.is_handcrafted ? ingredient.count * item_unit_price : item.pricePerBatch / item.batchSize)}</legend>

    <span className={styles.form}>
      {
        ingredient.is_handcrafted || ingredient.is_handpicked ?
        <span>{item_unit_price * ingredient.count}</span> : <>
          <ItemEditBatchSize item={item} />
          <ItemEditPricePerBatch item={item}/>
        </>
      }
    </span>

    {
      item.ingredients?.length ? <ItemIngredientsEditIsHandcrafted ingredient={ingredient} onChange={onChange}/> : <span>
        <label htmlFor={checkbox_id}>Récolté à la main</label>
        <input
          id={checkbox_id}
          value={`${ingredient.is_handpicked}`}
          type="checkbox"
          onChange={() => onChange({
            ...ingredient,
            is_handpicked: !ingredient.is_handpicked
          })}
        />
      </span>
    }
  </fieldset>
}
