import { Ingredient } from '@/models/ingredient'
import { Item } from '@/models/item'
import { Recipe } from '@/models/recipe'

const sauge: Item = {
  id: '1',
  label: 'Sauge',
  batchSize: 100,
  pricePerBatch: 3000,
  ingredients: []
}

const potion_de_rappel_sauge: Ingredient = {
  item: sauge,
  count: 4,
  is_handcrafted: false
}

const eau: Item = {
  id: '2',
  label: 'Eau',
  batchSize: 10,
  pricePerBatch: 200,
  ingredients: []
}

const potion_de_rappel_eau: Ingredient = {
  item: eau,
  count: 1,
  is_handcrafted: false
}

const potion_de_rappel: Item = {
  id: '3',
  label: 'Potion de rappel',
  pricePerBatch: 0,
  batchSize: 100,
  ingredients: [
    potion_de_rappel_sauge,
    potion_de_rappel_eau
  ]
}

const mesure_de_sel: Item = {
  id: '4',
  label: 'Mesure de sel',
  pricePerBatch: 800,
  batchSize: 10,
  ingredients: []
}

const mesure_de_poivre: Item = {
  id: '5',
  label: 'Mesure de poivre',
  pricePerBatch: 6937,
  batchSize: 100,
  ingredients: []
}

const trefle_5_feuilles: Item = {
  id: '6',
  label: 'Trefle à 5 feuilles',
  pricePerBatch: 104,
  batchSize: 10,
  ingredients: []
}

const houblon: Item = {
  id: '7',
  label: 'Houblon',
  pricePerBatch: 94,
  batchSize: 10,
  ingredients: []
}

const cendre_eternelle: Item = {
  id: '8',
  label: 'Cendre éternelle',
  pricePerBatch: 1000,
  batchSize: 10,
  ingredients: []
}

const briochette: Item = {
  id: '9',
  label: 'Briochette',
  pricePerBatch: 23889,
  batchSize: 100,
  ingredients: [
    {
      item: trefle_5_feuilles,
      count: 1,
      is_handcrafted: false
    },
    {
      item: houblon,
      count: 5,
      is_handcrafted: false
    },
    {
      item: cendre_eternelle,
      count: 1,
      is_handcrafted: false
    }
  ]
}


const brioche_viande_bouftou: Item = {
  id: '10',
  label: 'Brioche à la viande de Bouftou',
  pricePerBatch: 0,
  batchSize: 100,
  ingredients: [
    {
      item: mesure_de_sel,
      count: 1,
      is_handcrafted: false
    },
    {
      item: mesure_de_poivre,
      count: 1,
      is_handcrafted: false
    },
    {
      item: briochette,
      count: 1,
      is_handcrafted: false
    }
  ]
}

const all_items: Item[] = [
  potion_de_rappel,
  brioche_viande_bouftou
]

export {
  all_items,
  potion_de_rappel,
  brioche_viande_bouftou,
  briochette
}