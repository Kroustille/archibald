import { NumericInput as BpNumericInput } from '@blueprintjs/core'

interface Props {
  value: number
  onChange: (value: number) => void
  min?: number
}

export const NumericInput = ({ onChange, min, value }: Props) => <BpNumericInput 
  value={value} 
  min={min ?? 0}
  onValueChange={value => onChange(value)}
/>