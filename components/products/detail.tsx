import { POSSIBLE_BATCH_SIZES, Product } from '@/models/product'

import { NumericInput } from '@/ui/NumericInput'
import { Select } from '@/ui/Select'

interface Props {
  product: Product
  onChange(product: Product): void
}

export const ProductDetail = ({ product, onChange }: Props) => {
  return <>
    {product.label}
    <Select value={product.batchSize} options={POSSIBLE_BATCH_SIZES} onChange={batchSize => onChange({ 
      ...product,
      batchSize: Number.parseInt(batchSize)
    })}
    />
    
    <NumericInput
      value={product.pricePerBatch} 
      onChange={pricePerBatch => onChange({
        ...product,
        pricePerBatch
      })}
    />
  </>
}