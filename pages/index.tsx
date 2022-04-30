import { all_items, brioche_viande_bouftou } from '@/data/items'

import Head from 'next/head'
import { Item } from '@/models/item'
import { ItemDetail } from '@/components/item/detail'
import type { NextPage } from 'next'
import { Results } from '@/components/results'
import { Select } from '@/ui/Select'
import { Step } from '@/models/step'
import { StepDetail } from '@/components/steps/detail'
import { StepList } from '@/components/steps/list'
import { useState } from 'react'

const Home: NextPage = () => {
  const initial_item = brioche_viande_bouftou
  const step_1: Step = {
    level: 1,
    items: initial_item.ingredients
      .filter(ingredient => ingredient.item.ingredients.length && ingredient.is_handcrafted)
      .map(ingredient => ingredient.item)
  }
  
  const computeStep = (item: Item): Step[] => {
    const step = {
      level: 1,
      items: item.ingredients
        .filter(ingredient => ingredient.item.ingredients.length && ingredient.is_handcrafted)
        .map(ingredient => ingredient.item)
    }
    
    return [step]
  }
  
  const [selected_item, setSelectedItem] = useState(initial_item)
  const initial_steps: Step[] = computeStep(initial_item)
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
          options={all_items.map(item => item.label)} 
          onChange={item_label => {
            const new_item = all_items.find(item => item.label === item_label) ?? selected_item
            setSelectedItem(new_item)
            setSteps(computeStep(new_item))
          }}
        />
        <ItemDetail 
          item={selected_item} 
          onChange={(new_item) => {
            setSelectedItem(new_item)
            setSteps(computeStep(new_item))
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
