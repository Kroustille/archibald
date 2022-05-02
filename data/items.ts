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

const frene: Item = {
  id: 'frene',
  label: 'Bois de Frene',
  pricePerBatch: 1500,
  batchSize: 10,
  ingredients: []
}

const chataigner: Item = {
  id: 'chataigner',
  label: 'Bois de Châtaigner',
  pricePerBatch: 1650,
  batchSize: 10,
  ingredients: []
}

const planche_contreplaquee: Item = {
  id: 'planche_contreplaquee',
  label: 'Planche contreplaquee',
  pricePerBatch: 1000,
  batchSize: 10,
  ingredients: [
    {
      item: frene,
      count: 10,
      is_handcrafted: false
    },
    {
      item: chataigner,
      count: 10,
      is_handcrafted: false
    }
  ]
}

const ortie: Item = {
  id: 'ortie',
  label: 'Ortie',
  pricePerBatch: 1000,
  batchSize: 10,
  ingredients: []
}

const potion_de_souvenir: Item = {
  id: 'potion_de_souvenir',
  label: 'Potion de Souvenir',
  pricePerBatch: 100,
  batchSize: 1,
  ingredients: [
    {
      item: ortie,
      count: 20,
      is_handcrafted: false
    },
    {
      item: sauge,
      count: 10,
      is_handcrafted: false
    }
  ]
}

const laine_de_bouftou: Item = {
  id: 'laine_de_bouftou',
  label: 'Laine de Bouftou',
  pricePerBatch: 100,
  batchSize: 1,
  ingredients: []
}

const substrat_de_buisson: Item = {
  id: 'substrat_de_buisson',
  label: 'Substrat de buisson',
  pricePerBatch: 100,
  batchSize: 1,
  ingredients: [
    {
      item: planche_contreplaquee,
      count: 2,
      is_handcrafted: false
    },
    {
      item: potion_de_souvenir,
      count: 1,
      is_handcrafted: false
    }
  ]
}

const oeil_de_boufton: Item = {
  id: 'oeil_de_boufton',
  label: 'Oeil de Boufton',
  pricePerBatch: 100,
  batchSize: 1,
  ingredients: []
}

const boufbottes: Item = {
  id: 'boufbottes',
  label: 'Boufbottes',
  pricePerBatch: 1000,
  batchSize: 1,
  ingredients: [
    {
      item: laine_de_bouftou,
      count: 4,
      is_handcrafted: false
    },

    {
      item: substrat_de_buisson,
      count: 1,
      is_handcrafted: false
    },

    {
      item: oeil_de_boufton,
      count: 1,
      is_handcrafted: false
    }
  ]
}

const gelee_bleutee: Item = {
  id: 'gelee_bleutee',
  label: 'Gelée bleutée',
  pricePerBatch: 8877,
  batchSize: 100,
  ingredients: []
}

const blugely: Item = {
  id: 'blugely',
  label: 'Blugely',
  pricePerBatch: 368,
  batchSize: 1,
  ingredients: [
    {
      item: gelee_bleutee,
      count: 2,
      is_handcrafted: false
    }
  ]
}

const gelee_menthe: Item = {
  id: 'gelee_menthe',
  label: 'Gelée à la menthe',
  pricePerBatch: 1998,
  batchSize: 100,
  ingredients: []
}

const vertgely: Item = {
  id: 'vertgely',
  label: 'Vertgely',
  pricePerBatch: 368,
  batchSize: 1,
  ingredients: [
    {
      item: gelee_menthe,
      count: 2,
      is_handcrafted: false
    }
  ]
}

const gelee_fraise: Item = {
  id: 'gelee_fraise',
  label: 'Gelée à la Fraise',
  pricePerBatch: 59782,
  batchSize: 100,
  ingredients: []
}

const rougely: Item = {
  id: 'rougely',
  label: 'Rougely',
  pricePerBatch: 368,
  batchSize: 1,
  ingredients: [
    {
      item: gelee_fraise,
      count: 2,
      is_handcrafted: false
    }
  ]
}

const bec_kwak_glace: Item = {
  id: 'bec_kwak_glace',
  label: 'Bec du kwak de glace',
  pricePerBatch: 15,
  batchSize: 1,
  ingredients: []
}

const dent_pointue: Item = {
  id: 'dent_pointue',
  label: 'Dent pointue',
  pricePerBatch: 60,
  batchSize: 1,
  ingredients: []
}

const ebonite: Item = {
  id: 'ebonite',
  label: 'Ebonite',
  pricePerBatch: 16235,
  batchSize: 100,
  ingredients: []
}

const plume_du_kwakwa: Item = {
  id: 'plume_du_kwakwa',
  label: 'Plume du Kwakwa',
  pricePerBatch: 12988,
  batchSize: 10,
  ingredients: []
}

const kwakobottes_de_glace: Item = {
  id: 'kwakobottes_de_glace',
  label: 'Kwakobottes de glace',
  pricePerBatch: 368,
  batchSize: 1,
  ingredients: [
    {
      item: bec_kwak_glace,
      count: 2,
      is_handcrafted: false
    },
    {
      item: dent_pointue,
      count: 7,
      is_handcrafted: false
    },
    {
      item: ebonite,
      count: 2,
      is_handcrafted: false
    },
    {
      item: plume_du_kwakwa,
      count: 8,
      is_handcrafted: false
    }
  ]
}

const all_items: Item[] = [
  kwakobottes_de_glace,
  blugely,
  vertgely,
  rougely,
  briochette,
  potion_de_rappel,
  brioche_viande_bouftou,
  boufbottes
]

export {
  all_items,
  potion_de_rappel,
  brioche_viande_bouftou,
  boufbottes,
  blugely,
  briochette
}