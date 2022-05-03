import { selectUnitPrice } from '@/store/items/slice'
import { useAppSelector } from '@/hooks/store'

interface Props {
  item_id: string
}

export const Results = ({ item_id }: Props) => {
  const total_without_taxes = useAppSelector(state => selectUnitPrice(state, item_id))
  const total_with_taxes = total_without_taxes * 1.02
  const total_rounded = Math.ceil(total_with_taxes * 100 ) / 100
  return <footer>
    <h1>Sortie : {total_without_taxes}</h1>
    <h2>Taxe incluse: {total_rounded}</h2>
  </footer>
}
