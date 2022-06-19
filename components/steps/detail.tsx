import { ItemDetail } from '@/components/item/detail'
import { Step } from '@/domain/models/step'

interface Props {
  step: Step
  className?: string
}

export const StepDetail = ({ className, step }: Props ) => {
  const { level, item_ids } = step
  return <section className={className}>
    <h1>Etape {level}</h1>

    {item_ids.map(item_id => <ItemDetail key={item_id} item_id={item_id} />)}
  </section>
}
