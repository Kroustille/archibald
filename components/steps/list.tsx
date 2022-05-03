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

  const next_step_ids = items.reduce((acc, item) => {
    item.ingredients.forEach((ingredient) => {
      if (ingredient.is_handcrafted) {
        acc.push(ingredient.item_id)
      }
    })

    return acc
  }, new Array<string>())

  return <>
    {<StepDetail
      key={current_step.level}
      step={current_step}
      />
    }
    {!!next_step_ids.length && <StepList level={current_step.level+1} item_ids={next_step_ids} />}
  </>
}
