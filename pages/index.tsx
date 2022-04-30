import Head from 'next/head'
import { Ingredient } from '@/models/ingredient'
import type { NextPage } from 'next'
import { Product } from '@/models/product'
import { Recipe } from '@/models/recipe'
import { RecipeDetail } from '@/components/recipes/detail'
import { Results } from '@/components/results'
import styles from './styles.module.css'
import { useState } from 'react'

const Home: NextPage = () => {
  const sauge: Product = {
    id: '1',
    label: 'Sauge',
    batchSize: 100,
    pricePerBatch: 3000
  }

  const potion_de_rappel_sauge: Ingredient = {
    product: sauge,
    count: 4
  }

  const eau: Product = {
    id: '2',
    label: 'Eau',
    batchSize: 10,
    pricePerBatch: 200
  }

  const potion_de_rappel_eau: Ingredient = {
    product: eau,
    count: 1
  }

  const potion_de_rappel: Recipe = {
    id: '1',
    label: 'Potion de rappel',
    ingredients: [
      potion_de_rappel_sauge,
      potion_de_rappel_eau
    ]
  }

  const [recipes, setRecipes] = useState([potion_de_rappel])

  return (
    <div>
      <Head>
        <title>Archibald</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.grid}>
        <section>
          {recipes.map((recipe, index) => 
            <RecipeDetail 
              key={recipe.id} 
              recipe={recipe} 
              onChange={new_recipe => {
                const new_recipes = [...recipes]
                new_recipes[index] = new_recipe
                setRecipes(new_recipes)
              }}
            />
          )}
        </section>
        <section>
        </section>
        <Results recipe={recipes[0]}/>
      </main>
    </div>
  )
}

export default Home
