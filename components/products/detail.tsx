import { POSSIBLE_BATCH_SIZES, Product } from '@/models/Product'

import { safeParseInt } from '@/helpers/parse'

interface Props {
  product: Product
  onChange(product: Product): void
}

export const ProductDetail = ({ product, onChange }: Props) => {
  return <>
    {product.label}
    <select value={product.batchSize} onChange={event => onChange({ 
      ...product,
      batchSize: Number.parseInt(event.target.value)
    })}>
      {
        POSSIBLE_BATCH_SIZES.map(batchSize => <option key={batchSize} value={batchSize}>
          {batchSize}
        </option>)
      }
    </select>
    
    <input 
      type="number"
      value={product.pricePerBatch} 
      onChange={event => onChange({
        ...product, 
        pricePerBatch: safeParseInt(event.target.value)
      })}
    />


  </>
}