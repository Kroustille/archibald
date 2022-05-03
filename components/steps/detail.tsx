import { ItemDetail } from '@/components/item/detail'
import { Step } from '@/models/step'

interface Props {
  step: Step
}

export const StepDetail = ({ step }: Props ) => {
  const { level, item_ids } = step
  return <section>
    <h1>Etape {level}</h1>
    
    {item_ids.map(item_id => <ItemDetail key={item_id} item_id={item_id} />)}
  </section>
}