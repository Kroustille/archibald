import { ItemDetail } from '@/components/item/detail'
import { Step } from '@/models/step'

interface Props {
  step: Step
  onChange: (step: Step) => void
}

export const StepDetail = ({ step, onChange }: Props ) => {
  const { level, items } = step
  return <section>
    <h1>Etape {level}</h1>
    
    {items.map((item, item_index) => <ItemDetail key={item.id} item={item} onChange={(item) => {
      const new_items = [...items]
      new_items[item_index] = item
      onChange({
        ...step,
        items: new_items
      })
    }}/>)}
  </section>
}