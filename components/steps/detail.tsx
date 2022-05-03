import { ItemDetail } from '@/components/item/detail'
import { Step } from '@/models/step'

interface Props {
  step: Step
}

export const StepDetail = ({ step }: Props ) => {
  const { level, items } = step
  return <section>
    <h1>Etape {level}</h1>
    
    {items.map(item => <ItemDetail key={item.id} item={item} />)}
  </section>
}