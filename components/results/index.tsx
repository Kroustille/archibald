import { selectItem, selectUnitPrice } from '@/store/items/slice'

import styles from './styles.module.css'
import { useAppSelector } from '@/hooks/store'

interface Props {
  item_id: string
}

export const Results = ({ item_id }: Props) => {
  const item = useAppSelector(state => selectItem(state, item_id))
  const total_without_taxes = useAppSelector(state => selectUnitPrice(state, item_id))
  if (!item) {
    return null
  }

  const total_with_taxes = total_without_taxes * 1.02
  const total_rounded = Math.ceil(total_with_taxes * 100) / 100
  const sell_price_without_taxes = (item.pricePerBatch / item.batchSize) * 0.98
  const price_sign = sell_price_without_taxes > total_with_taxes ? 1 : -1
  const price_class = price_sign > 0 ? styles.positive : styles.negative
  const price_difference = Math.ceil((
    price_sign > 0 ?
      sell_price_without_taxes / total_with_taxes * 100  :
      100 - sell_price_without_taxes / total_with_taxes * 100
  ))

  return <footer>
    <h1 className={price_class}>{total_without_taxes} = { price_difference }%</h1>
    <h2>Taxe incluse: {total_rounded}</h2>
    <p>Prix de vente - taxes = {sell_price_without_taxes}</p>
  </footer>
}
