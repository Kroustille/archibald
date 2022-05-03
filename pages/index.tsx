import { resetIsHandcrafted, selectCraftableItems, selectCurrentItem, setCurrentItem } from '@/store/items/slice'
import { useAppDispatch, useAppSelector } from '@/hooks/store'

import Head from 'next/head'
import { ItemDetail } from '@/components/item/detail'
import type { NextPage } from 'next'
import { Results } from '@/components/results'
import { Select } from '@/components/ui/Select'
import { StepList } from '@/components/steps/list'
import { StepsContainer } from '@/components/steps/container'

const Home: NextPage = () => {
  const dispatch = useAppDispatch()
  const items = useAppSelector(selectCraftableItems)
  const current_item = useAppSelector(selectCurrentItem)

  return (
    <div className='page'>
      <Head>
        <title>Archibald</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>Entrée</h1>
        <Select
          value={current_item.id}
          options={items.map(item => ({
            key: item.id,
            value: item.id,
            label: item.label
          }))}
          onChange={item_id => {
            dispatch(setCurrentItem({ item_id }))
            dispatch(resetIsHandcrafted())
          }}
        />
        <ItemDetail item_id={current_item.id} />
      </header>
      <StepsContainer item={current_item} />
      <Results item_id={current_item.id}/>
    </div>
  )
}

export default Home
