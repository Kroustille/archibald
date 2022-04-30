import { Step } from '@/models/step'
import { StepDetail } from '@/components/steps/detail'

interface Props {
  steps: Step[]
  onChange: (steps: Step[]) => void
}

export const StepList = ({ onChange, steps }: Props) => {
  return <>
    {steps.map((step, step_index) => 
      <StepDetail 
        key={step.level} 
        step={step} 
        onChange={new_step => {
          const new_steps = [...steps]
          new_steps[step_index] = new_step
          onChange(new_steps)
        }}
      />
    )}
  </>
}