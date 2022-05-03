import { Item, isHarvestable } from '@/models/item'

import Head from 'next/head'
import { ItemDetail } from '@/components/item/detail'
import type { NextPage } from 'next'
import { Results } from '@/components/results'
import { Select } from '@/ui/Select'
import { Step } from '@/models/step'
import { StepList } from '@/components/steps/list'
import { selectItems } from '@/store/items/slice'
import { useAppSelector } from '@/hooks/store'
import { useState } from 'react'

const Home: NextPage = () => {
  const items = useAppSelector(selectItems)
  const initial_item = items[0]
  const computeSteps = (item: Item): Step[] => {
    return []
    // const step = {
    //   level: 1,
    //   items: item.ingredients
    //     .filter(ingredient => isHarvestable(ingredient.item) && ingredient.is_handcrafted)
    //     .map(ingredient => ingredient.item)
    // }
    
    // return [step]
  }
  
  const [selected_item, setSelectedItem] = useState(initial_item)
  const initial_steps: Step[] = computeSteps(initial_item)
  const [steps, setSteps] = useState(initial_steps)

  return (
    <div className='page'>
      <Head>
        <title>Archibald</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>Entrée</h1>
        <Select
          value={selected_item.label} 
          options={items.map(item => item.label)} 
          onChange={item_label => {
            const new_item = items.find(item => item.label === item_label) ?? selected_item
            setSelectedItem(new_item)
            setSteps(computeSteps(new_item))
          }}
        />
        <ItemDetail
          item={selected_item} 
          onChange={(new_item) => {
            setSelectedItem(new_item)
            setSteps(computeSteps(new_item))
          }}
        />
      </header>
      <main>
        <StepList
          steps={steps.filter(step => step.items.length)} 
          onChange={steps => setSteps(steps)}
        />
      </main>
      <Results item={selected_item}/>
    </div>
  )
}

export default Home
