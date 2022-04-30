import { Ingredient } from '@/models/ingredient'
import { Product } from '@/models/product'
import { Recipe } from '@/models/recipe'

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

export {
  potion_de_rappel,
}