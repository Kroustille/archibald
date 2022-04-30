import Head from 'next/head'
import { Ingredient } from '@/models/Ingredient'
import type { NextPage } from 'next'
import { Product } from '@/models/Product'
import { Recipe } from '@/models/Recipe'
import { RecipeDetail } from '@/components/recipes/detail'
import { useState } from 'react'

const Home: NextPage = () => {
  const sauge: Product = {
    id: '1',
    label: 'Sauge'
  }

  const potion_de_rappel_sauge: Ingredient = {
    product: sauge,
    count: 4
  }

  const eau: Product = {
    id: '2',
    label: 'Eau'
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

      <main>
        <h1>Hello</h1>
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
      </main>
    </div>
  )
}

export default Home
