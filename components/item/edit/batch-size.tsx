import { Item, POSSIBLE_BATCH_SIZES } from '@/models/item'

import { Select } from '@/ui/Select'
import { safeParseInt } from '@/helpers/parse'
import { updateItem } from '@/store/items/slice'
import { useAppDispatch } from '@/hooks/store'

interface Props {
  item: Item
}

export const ItemEditBatchSize = ({ item }: Props) => {
  const dispatch = useAppDispatch()

  return <Select 
    value={item.batchSize} 
    options={POSSIBLE_BATCH_SIZES.map(possibleBatchSize => ({
      key: possibleBatchSize,
      label: `x${possibleBatchSize}`,
      value: possibleBatchSize
    }))} 
    onChange={batchSize => dispatch(
      updateItem({
      item: {
        ...item,
        batchSize: safeParseInt(batchSize)
      }}
    ))
  }/>

}