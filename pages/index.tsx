import Head from 'next/head'
import type { NextPage } from 'next'
import { RecipeDetail } from '@/components/recipes/detail'
import { Results } from '@/components/results'
import { potion_de_rappel } from '@/data/recipes'
import styles from './styles.module.css'
import { useState } from 'react'

const Home: NextPage = () => {
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
