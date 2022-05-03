import { Ingredient, computePrice } from '@/models/ingredient'

import { ItemEditPricePerBatch } from '@/components/item/edit/price-per-batch'
import { POSSIBLE_BATCH_SIZES } from '@/models/item'
import { Select } from '@/ui/Select'
import { selectItem } from '@/store/items/slice'
import styles from './styles.module.css'
import { useAppSelector } from '@/hooks/store'

interface Props {
  ingredient: Ingredient
  className?: string
  onChange(ingredient: Ingredient): void
}

export const IngredientDetail = ({ className, ingredient, onChange }: Props) => {
  const item = useAppSelector(state => selectItem(state, ingredient.item_id))
  const checkbox_id = `ingredient-${ingredient.item_id}`;
  return <fieldset className={className}>
    <legend>{ingredient.count} X&nbsp;{item.label}</legend>
      
    <span className={styles.form}>
      <Select value={item.batchSize} options={POSSIBLE_BATCH_SIZES} onChange={console.log}/>
    
      {
        ingredient.is_handcrafted ? 
        <span>{computePrice(ingredient)}</span>
        : <ItemEditPricePerBatch item={item}/>
      }
    </span>
    
    {
      !!item.ingredients?.length && <span>
        <label htmlFor={checkbox_id}>A fabriquer</label>
        <input 
          id={checkbox_id} 
          value={`${ingredient.is_handcrafted}`} 
          type="checkbox" 
          onChange={() => onChange({
            ...ingredient,
            is_handcrafted: !ingredient.is_handcrafted
          })}
          />
      </span>
    }
  </fieldset>
}