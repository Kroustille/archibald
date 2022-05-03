import { Step } from '@/models/step'
import { StepDetail } from '@/components/steps/detail'

interface Props {
  steps: Step[]
}

export const StepList = ({ steps }: Props) => {
  return <>
    {steps.map(step => <StepDetail key={step.level} step={step} />)}
  </>
}