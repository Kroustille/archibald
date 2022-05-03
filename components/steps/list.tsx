import { Step } from '@/models/step'
import { StepDetail } from '@/components/steps/detail'
import { selectItems } from '@/store/items/slice'
import { useAppSelector } from '@/hooks/store'

interface Props {
  item_ids: string[]
  level: number
}

export const StepList = ({ item_ids, level }: Props) => {
  const items = useAppSelector(state => selectItems(state, item_ids))
  if (!items.length) {
    return null
  }

  const current_step: Step = {
    level,
    item_ids
  }

  return <>
    {<StepDetail key={current_step.level} step={current_step} />}
  </>
}
