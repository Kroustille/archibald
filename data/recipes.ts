import { Ingredient } from '@/models/ingredient'
import { Item } from '@/models/item'
import { Recipe } from '@/models/recipe'

const sauge: Item = {
  id: '1',
  label: 'Sauge',
  batchSize: 100,
  pricePerBatch: 3000
}

const potion_de_rappel_sauge: Ingredient = {
  item: sauge,
  count: 4
}

const eau: Item = {
  id: '2',
  label: 'Eau',
  batchSize: 10,
  pricePerBatch: 200
}

const potion_de_rappel_eau: Ingredient = {
  item: eau,
  count: 1
}

const potion_de_rappel: Item = {
  id: '1',
  label: 'Potion de rappel',
  pricePerBatch: 0,
  batchSize: 100,
  ingredients: [
    potion_de_rappel_sauge,
    potion_de_rappel_eau
  ]
}

// Brioche à la viande de Bouftou
//   1 * Une mesure de sel
//   1 * Une mesue de  poive
//   1 * Briochette
// Briochette
//   1 * Trèfle à 5 feuile
//   5 * Houblon
//   1 * cendre éternelle
export {
  potion_de_rappel,
}