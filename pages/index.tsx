import Head from 'next/head'
import { ItemDetail } from '@/components/item/detail'
import type { NextPage } from 'next'
import { Results } from '@/components/results'
import { potion_de_rappel } from '@/data/recipes'
import styles from './styles.module.css'
import { useState } from 'react'

const Home: NextPage = () => {
  const [item, setItem] = useState(potion_de_rappel)

  return (
    <div>
      <Head>
        <title>Archibald</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.grid}>
        <header>
          <ItemDetail 
            item={item} 
            onChange={setItem}
          />
        </header>
        <section>
          <div>
            <article></article>
            <article></article>
          </div>
          <div>
            <article></article>
            <article></article>
          </div>

        </section>
        <Results item={item}/>
      </main>
    </div>
  )
}

export default Home
