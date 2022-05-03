import { selectItem, selectUnitPrice } from '@/store/items/slice'

import { Ingredient } from '@/models/ingredient'
import { ItemEditBatchSize } from '@/components/item/edit/batch-size'
import { ItemEditPricePerBatch } from '@/components/item/edit/price-per-batch'
import { ItemIngredientsEditIsHandcrafted } from '@/components/item/ingredients/edit/is-handcrafted'
import { ItemIngredientsEditIsHandpicked } from '@/components/item/ingredients/edit/is-handpicked'
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

  return <fieldset className={className}>
    <legend>{ingredient.count} X&nbsp;{item.label} = {
      Math.ceil(ingredient.count * (
        ingredient.is_handcrafted ?
        ingredient.count * item_unit_price :
        item.pricePerBatch / item.batchSize
      ))}</legend>

    <span className={styles.form}>
      {
        ingredient.is_handcrafted || ingredient.is_handpicked ?
        <span>{(ingredient.is_handpicked ? 0 : item_unit_price) * ingredient.count}</span> : <>
          <ItemEditBatchSize item={item} />
          <ItemEditPricePerBatch item={item}/>
        </>
      }
    </span>

    {
      item.ingredients?.length ? <ItemIngredientsEditIsHandcrafted ingredient={ingredient} onChange={onChange}/> : <ItemIngredientsEditIsHandpicked ingredient={ingredient} onChange={onChange}/>
    }
  </fieldset>
}
