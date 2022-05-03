import { selectCraftableItems, selectCurrentItem, setCurrentItem } from '@/store/items/slice'
import { useAppDispatch, useAppSelector } from '@/hooks/store'

import Head from 'next/head'
import { ItemDetail } from '@/components/item/detail'
import type { NextPage } from 'next'
import { Results } from '@/components/results'
import { Select } from '@/components/ui/Select'
import { StepList } from '@/components/steps/list'

const Home: NextPage = () => {
  // const computeSteps = (item: Item): Step[] => {
  //   return []
  //   // const step = {
  //   //   level: 1,
  //   //   items: item.ingredients
  //   //     .filter(ingredient => isHarvestable(ingredient.item) && ingredient.is_handcrafted)
  //   //     .map(ingredient => ingredient.item)
  //   // }
    
  //   // return [step]
  // }
  
  // const initial_steps: Step[] = computeSteps(selected_item)
  // const [steps, setSteps] = useState(initial_steps)
  
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
          onChange={item_id => dispatch(setCurrentItem({ item_id }))}
        />
        <ItemDetail item_id={current_item.id} />
      </header>
      <main>
        {/* <StepList steps={steps.filter(step => step.items.length)} /> */}
      </main>
      <Results item={current_item}/>
    </div>
  )
}

export default Home
