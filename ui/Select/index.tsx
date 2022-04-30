interface Props {
  value: string | number
  options: Array<string | number>
  onChange: (value: string) => void
}

export const Select = ({ onChange, options, value }: Props) => <select value={value} onChange={event => onChange(event.target.value)}>
  {options.map(option => <option value={option} key={option}>{option}</option>)}
</select>