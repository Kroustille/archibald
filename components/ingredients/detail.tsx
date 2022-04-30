import { Ingredient } from '@/models/ingredient'
import { NumericInput } from '@/ui/NumericInput'
import { POSSIBLE_BATCH_SIZES } from '@/models/item'
import { Select } from '@/ui/Select'
import styles from './styles.module.css'

interface Props {
  ingredient: Ingredient
  className?: string
  onChange(ingredient: Ingredient): void
}

export const IngredientDetail = ({ className, ingredient, onChange }: Props) => {
  const checkbox_id = `ingredient-${ingredient.item.label}`;

  return <fieldset className={className}>
    <legend>{ingredient.count} X&nbsp;{ingredient.item.label}</legend>
      
    <span className={styles.form}>
      <Select value={ingredient.item.batchSize} options={POSSIBLE_BATCH_SIZES} onChange={batchSize => onChange({ 
        ...ingredient,
        item: {
          ...ingredient.item,
          batchSize: Number.parseInt(batchSize)
        }
      })}/>
    
      <NumericInput
        value={ingredient.item.pricePerBatch} 
        onChange={pricePerBatch => onChange({
          ...ingredient,
          item: {
            ...ingredient.item,
            pricePerBatch
          }
        })}/>
    </span>
    
    {
      !!ingredient.item.ingredients.length && <span>
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