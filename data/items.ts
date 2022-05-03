import { Ingredient } from '@/models/ingredient'
import { Item } from '@/models/item'

const sauge: Item = {
  id: 'sauge',
  label: 'Sauge',
  batchSize: 100,
  pricePerBatch: 3000,
  ingredients: []
}

const eau: Item = {
  id: 'eau',
  label: 'Eau',
  batchSize: 10,
  pricePerBatch: 200,
  ingredients: []
}

const potion_de_rappel: Item = {
  id: 'potion_de_rappel',
  label: 'Potion de rappel',
  pricePerBatch: 0,
  batchSize: 100,
  ingredients: [
    {
      item_id: sauge.id,
      count: 4,
      is_handcrafted: false
    },
    {
      item_id: eau.id,
      count: 1,
      is_handcrafted: false
    }
  ]
}

const mesure_de_sel: Item = {
  id: 'mesure_de_sel',
  label: 'Mesure de sel',
  pricePerBatch: 800,
  batchSize: 10,
  ingredients: []
}

const mesure_de_poivre: Item = {
  id: 'mesure_de_poivre',
  label: 'Mesure de poivre',
  pricePerBatch: 6937,
  batchSize: 100,
  ingredients: []
}

const trefle_5_feuilles: Item = {
  id: 'trefle_5_feuilles',
  label: 'Trefle à 5 feuilles',
  pricePerBatch: 104,
  batchSize: 10,
  ingredients: []
}

const houblon: Item = {
  id: 'houblon',
  label: 'Houblon',
  pricePerBatch: 94,
  batchSize: 10,
  ingredients: []
}

const cendre_eternelle: Item = {
  id: 'cendre_eternelle',
  label: 'Cendre éternelle',
  pricePerBatch: 1000,
  batchSize: 10,
  ingredients: []
}

const briochette: Item = {
  id: 'briochette',
  label: 'Briochette',
  pricePerBatch: 23889,
  batchSize: 100,
  ingredients: [
    {
      item_id: trefle_5_feuilles.id,
      count: 1,
      is_handcrafted: false
    },
    {
      item_id: houblon.id,
      count: 5,
      is_handcrafted: false
    },
    {
      item_id: cendre_eternelle.id,
      count: 1,
      is_handcrafted: false
    }
  ]
}


const brioche_viande_bouftou: Item = {
  id: 'brioche_viande_bouftou',
  label: 'Brioche à la viande de Bouftou',
  pricePerBatch: 0,
  batchSize: 100,
  ingredients: [
    {
      item_id: mesure_de_sel.id,
      count: 1,
      is_handcrafted: false
    },
    {
      item_id: mesure_de_poivre.id,
      count: 1,
      is_handcrafted: false
    },
    {
      item_id: briochette.id,
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
      item_id: frene.id,
      count: 10,
      is_handcrafted: false
    },
    {
      item_id: chataigner.id,
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
      item_id: ortie.id,
      count: 20,
      is_handcrafted: false
    },
    {
      item_id: sauge.id,
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
      item_id: planche_contreplaquee.id,
      count: 2,
      is_handcrafted: false
    },
    {
      item_id: potion_de_souvenir.id,
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
      item_id: laine_de_bouftou.id,
      count: 4,
      is_handcrafted: false
    },

    {
      item_id: substrat_de_buisson.id,
      count: 1,
      is_handcrafted: false
    },

    {
      item_id: oeil_de_boufton.id,
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
  pricePerBatch: 2499,
  batchSize: 10,
  ingredients: [
    {
      item_id: gelee_bleutee.id,
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
  pricePerBatch: 23,
  batchSize: 1,
  ingredients: [
    {
      item_id: gelee_menthe.id,
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
  pricePerBatch: 2898,
  batchSize: 10,
  ingredients: [
    {
      item_id: gelee_fraise.id,
      count: 2,
      is_handcrafted: false
    }
  ]
}

const multigely: Item = {
  id: 'multigely',
  label: 'Multigely',
  pricePerBatch: 1500,
  batchSize: 1,
  ingredients: [
    {
      item_id: blugely.id,
      count: 4,
      is_handcrafted: false
    },
    {
      item_id: vertgely.id,
      count: 3,
      is_handcrafted: false
    },
    {
      item_id: rougely.id,
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
      item_id: bec_kwak_glace.id,
      count: 2,
      is_handcrafted: false
    },
    {
      item_id: dent_pointue.id,
      count: 7,
      is_handcrafted: false
    },
    {
      item_id: ebonite.id,
      count: 2,
      is_handcrafted: false
    },
    {
      item_id: plume_du_kwakwa.id,
      count: 8,
      is_handcrafted: false
    }
  ]
}

const all_items: Item[] = [
  multigely,
  blugely,
  vertgely,
  rougely,
  kwakobottes_de_glace,
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