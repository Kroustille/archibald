interface Option {
  key: string | number
  label?: string
  value: string | number
}

interface Props {
  value: string | number
  options: Array<Option>
  onChange: (value: string) => void
}

export const Select = ({ onChange, options, value }: Props) => <select value={value} onChange={event => onChange(event.target.value)}>
  {options.map(option => <option value={option.value} key={option.value}>{option.label ?? option.value}</option>)}
</select>