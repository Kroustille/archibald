import { Item } from '@/models/item'
import { NumericInput } from '@/ui/NumericInput'
import { updateItem } from '@/store/items/slice'
import { useAppDispatch } from '@/hooks/store'

interface Props {
  item: Item
}

export const ItemEditPricePerBatch = ({ item }: Props) => {
  const dispatch = useAppDispatch()

  return <NumericInput
    value={item.pricePerBatch} 
    onChange={pricePerBatch => dispatch(
      updateItem({
      item: {
        ...item,
        pricePerBatch
      }})
    )
  }/>
}