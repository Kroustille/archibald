import { Item } from '@/domain/models/item'
import { StepList } from '@/components/steps/list'

interface Props {
  item: Item
}

export const StepsContainer = ({ item }: Props) => {
  return <main>
    <StepList item_ids={
        item.ingredients
          .filter(ingredient => ingredient.is_handcrafted)
          .map(ingredient => ingredient.item_id)
      } level={1}
    />
  </main>
}
