import { safeParseInt } from 'helpers/parse'

interface Props {
  value: number
  onChange: (value: number) => void
  min?: number
}

export const NumericInput = ({ onChange, min, value }: Props) => <input 
  type="number"
  value={value} 
  min={min ?? 0}
  onChange={event => onChange(safeParseInt(event.target.value))}
/>