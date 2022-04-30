import { HTMLSelect } from '@blueprintjs/core'

interface Props {
  value: string | number | undefined
  options: Array<string | number> | undefined
  onChange: (value: string) => void
}

export const Select = ({ onChange, options, value }: Props) => <HTMLSelect value={value} options={options} onChange={event => onChange(event.target.value)}/>