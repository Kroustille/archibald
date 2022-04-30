import { Ingredient } from '@/models/ingredient'
import { NumericInput } from '@/ui/NumericInput'
import { POSSIBLE_BATCH_SIZES } from '@/models/product'
import { Select } from '@/ui/Select'
import styles from './styles.module.css'

interface Props {
  ingredient: Ingredient
  className?: string
  onChange(ingredient:Ingredient): void
}

export const IngredientDetail = ({ className, ingredient, onChange }: Props) => {
  return <fieldset className={className}>
    <legend>{ingredient.count} X&nbsp;{ingredient.product.label}</legend>
    
    <span className={styles.form}>
      <Select value={ingredient.product.batchSize} options={POSSIBLE_BATCH_SIZES} onChange={batchSize => onChange({ 
        ...ingredient,
        product: {
          ...ingredient.product,
          batchSize: Number.parseInt(batchSize)
        }
      })}/>
    
      <NumericInput
        value={ingredient.product.pricePerBatch} 
        onChange={pricePerBatch => onChange({
          ...ingredient,
          product: {
            ...ingredient.product,
            pricePerBatch
          }
        })}/>
    </span>
  </fieldset>
}