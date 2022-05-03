import { Item } from '@/models/item'

export const sauge: Item = {
  id: 'sauge',
  label: 'Sauge',
  batchSize: 100,
  pricePerBatch: 3000,
  ingredients: []
}

export const eau: Item = {
  id: 'eau',
  label: 'Eau',
  batchSize: 10,
  pricePerBatch: 200,
  ingredients: []
}

export const potion_de_rappel: Item = {
  id: 'potion_de_rappel',
  label: 'Potion de rappel',
  pricePerBatch: 0,
  batchSize: 100,
  ingredients: [
    {
      item_id: sauge.id,
      count: 4
    },
    {
      item_id: eau.id,
      count: 1
    }
  ]
}

export const mesure_de_sel: Item = {
  id: 'mesure_de_sel',
  label: 'Mesure de sel',
  pricePerBatch: 800,
  batchSize: 10,
  ingredients: []
}

export const mesure_de_poivre: Item = {
  id: 'mesure_de_poivre',
  label: 'Mesure de poivre',
  pricePerBatch: 6937,
  batchSize: 100,
  ingredients: []
}

export const trefle_5_feuilles: Item = {
  id: 'trefle_5_feuilles',
  label: 'Trefle à 5 feuilles',
  pricePerBatch: 104,
  batchSize: 10,
  ingredients: []
}

export const houblon: Item = {
  id: 'houblon',
  label: 'Houblon',
  pricePerBatch: 94,
  batchSize: 10,
  ingredients: []
}

export const cendre_eternelle: Item = {
  id: 'cendre_eternelle',
  label: 'Cendre éternelle',
  pricePerBatch: 1000,
  batchSize: 10,
  ingredients: []
}

export const briochette: Item = {
  id: 'briochette',
  label: 'Briochette',
  pricePerBatch: 23889,
  batchSize: 100,
  ingredients: [
    {
      item_id: trefle_5_feuilles.id,
      count: 1
    },
    {
      item_id: houblon.id,
      count: 5
    },
    {
      item_id: cendre_eternelle.id,
      count: 1
    }
  ]
}

export const brioche_viande_bouftou: Item = {
  id: 'brioche_viande_bouftou',
  label: 'Brioche à la viande de Bouftou',
  pricePerBatch: 0,
  batchSize: 100,
  ingredients: [
    {
      item_id: mesure_de_sel.id,
      count: 1
    },
    {
      item_id: mesure_de_poivre.id,
      count: 1
    },
    {
      item_id: briochette.id,
      count: 1
    }
  ]
}

export const frene: Item = {
  id: 'frene',
  label: 'Bois de Frene',
  pricePerBatch: 1500,
  batchSize: 10,
  ingredients: []
}

export const chataigner: Item = {
  id: 'chataigner',
  label: 'Bois de Châtaigner',
  pricePerBatch: 1650,
  batchSize: 10,
  ingredients: []
}

export const planche_contreplaquee: Item = {
  id: 'planche_contreplaquee',
  label: 'Planche contreplaquee',
  pricePerBatch: 1000,
  batchSize: 10,
  ingredients: [
    {
      item_id: frene.id,
      count: 10
    },
    {
      item_id: chataigner.id,
      count: 10
    }
  ]
}

export const ortie: Item = {
  id: 'ortie',
  label: 'Ortie',
  pricePerBatch: 1000,
  batchSize: 10,
  ingredients: []
}

export const potion_de_souvenir: Item = {
  id: 'potion_de_souvenir',
  label: 'Potion de Souvenir',
  pricePerBatch: 100,
  batchSize: 1,
  ingredients: [
    {
      item_id: ortie.id,
      count: 20
    },
    {
      item_id: sauge.id,
      count: 10
    }
  ]
}

export const laine_de_bouftou: Item = {
  id: 'laine_de_bouftou',
  label: 'Laine de Bouftou',
  pricePerBatch: 100,
  batchSize: 1,
  ingredients: []
}

export const substrat_de_buisson: Item = {
  id: 'substrat_de_buisson',
  label: 'Substrat de buisson',
  pricePerBatch: 100,
  batchSize: 1,
  ingredients: [
    {
      item_id: planche_contreplaquee.id,
      count: 2
    },
    {
      item_id: potion_de_souvenir.id,
      count: 1
    }
  ]
}

export const oeil_de_boufton: Item = {
  id: 'oeil_de_boufton',
  label: 'Oeil de Boufton',
  pricePerBatch: 100,
  batchSize: 1,
  ingredients: []
}

export const boufbottes: Item = {
  id: 'boufbottes',
  label: 'Boufbottes',
  pricePerBatch: 90,
  batchSize: 1,
  ingredients: [
    {
      item_id: laine_de_bouftou.id,
      count: 4
    },

    {
      item_id: substrat_de_buisson.id,
      count: 1
    },

    {
      item_id: oeil_de_boufton.id,
      count: 1
    }
  ]
}

export const gelee_bleutee: Item = {
  id: 'gelee_bleutee',
  label: 'Gelée bleutée',
  pricePerBatch: 8877,
  batchSize: 100,
  ingredients: []
}

export const blugely: Item = {
  id: 'blugely',
  label: 'Blugely',
  pricePerBatch: 2499,
  batchSize: 10,
  ingredients: [
    {
      item_id: gelee_bleutee.id,
      count: 2
    }
  ]
}

export const gelee_menthe: Item = {
  id: 'gelee_menthe',
  label: 'Gelée à la menthe',
  pricePerBatch: 1998,
  batchSize: 100,
  ingredients: []
}

export const vertgely: Item = {
  id: 'vertgely',
  label: 'Vertgely',
  pricePerBatch: 23,
  batchSize: 1,
  ingredients: [
    {
      item_id: gelee_menthe.id,
      count: 2
    }
  ]
}

export const gelee_fraise: Item = {
  id: 'gelee_fraise',
  label: 'Gelée à la fraise',
  pricePerBatch: 59782,
  batchSize: 100,
  ingredients: []
}

export const rougely: Item = {
  id: 'rougely',
  label: 'Rougely',
  pricePerBatch: 2898,
  batchSize: 10,
  ingredients: [
    {
      item_id: gelee_fraise.id,
      count: 2
    }
  ]
}

export const multigely: Item = {
  id: 'multigely',
  label: 'Multigely',
  pricePerBatch: 1500,
  batchSize: 1,
  ingredients: [
    {
      item_id: blugely.id,
      count: 4
    },
    {
      item_id: vertgely.id,
      count: 3
    },
    {
      item_id: rougely.id,
      count: 2
    }
  ]
}

export const bec_kwak_glace: Item = {
  id: 'bec_kwak_glace',
  label: 'Bec du kwak de glace',
  pricePerBatch: 15,
  batchSize: 1,
  ingredients: []
}

export const dent_pointue: Item = {
  id: 'dent_pointue',
  label: 'Dent pointue',
  pricePerBatch: 60,
  batchSize: 1,
  ingredients: []
}

export const ebonite: Item = {
  id: 'ebonite',
  label: 'Ebonite',
  pricePerBatch: 16235,
  batchSize: 10,
  ingredients: []
}

export const plume_du_kwakwa: Item = {
  id: 'plume_du_kwakwa',
  label: 'Plume du Kwakwa',
  pricePerBatch: 8800,
  batchSize: 10,
  ingredients: []
}

export const plume_kwak_flamme: Item = {
  id: 'plume_kwak_flamme',
  label: 'Plume du Kwak de flammes',
  pricePerBatch: 6250,
  batchSize: 10,
  ingredients: []
}

export const cuir_de_ouassingue: Item = {
  id: 'cuir_de_ouassingue',
  label: 'Cuir de Ouassingue',
  pricePerBatch: 4598,
  batchSize: 10,
  ingredients: []
}

export const kwakobottes_de_glace: Item = {
  id: 'kwakobottes_de_glace',
  label: 'Kwakobottes de glace',
  pricePerBatch: 20000,
  batchSize: 1,
  ingredients: [
    {
      item_id: bec_kwak_glace.id,
      count: 2
    },
    {
      item_id: dent_pointue.id,
      count: 7
    },
    {
      item_id: ebonite.id,
      count: 2
    },
    {
      item_id: plume_du_kwakwa.id,
      count: 8
    }
  ]
}

export const kwakobottes_de_flammes: Item = {
  id: 'kwakobottes_de_flammes',
  label: 'Kwakobottes de flammes',
  pricePerBatch: 48000,
  batchSize: 1,
  ingredients: [
    {
      item_id: plume_kwak_flamme.id,
      count: 7
    },
    {
      item_id: cuir_de_ouassingue.id,
      count: 6
    },
    {
      item_id: ebonite.id,
      count: 2
    },
    {
      item_id: plume_du_kwakwa.id,
      count: 10
    }
  ]
}

export const tatouage_de_mauvais_garcon: Item = {
  id: 'tatouage_de_mauvais_garcon',
  label: 'Tatouage de mauvais garcon',
  pricePerBatch: 18999,
  batchSize: 10,
  ingredients: []
}

export const poil_arakne_malade: Item = {
  id: 'poil_arakne_malade',
  label: 'Poil d\'Arakne malade',
  pricePerBatch: 3169,
  batchSize: 10,
  ingredients: []
}

export const ceinture_du_bandit: Item = {
  id: 'ceinture_du_bandit',
  label: 'Ceinture du bandit',
  pricePerBatch: 17000,
  batchSize: 1,
  ingredients: [
    {
      item_id: tatouage_de_mauvais_garcon.id,
      count: 3
    },
    {
      item_id: poil_arakne_malade.id,
      count: 3
    }
  ]
}

export const all_items: Item[] = [
  bec_kwak_glace,
  blugely,
  boufbottes,
  brioche_viande_bouftou,
  briochette,
  ceinture_du_bandit,
  cendre_eternelle,
  chataigner,
  cuir_de_ouassingue,
  dent_pointue,
  eau,
  ebonite,
  frene,
  gelee_bleutee,
  gelee_fraise,
  gelee_menthe,
  houblon,
  kwakobottes_de_flammes,
  kwakobottes_de_glace,
  laine_de_bouftou,
  mesure_de_poivre,
  mesure_de_sel,
  multigely,
  oeil_de_boufton,
  ortie,
  planche_contreplaquee,
  plume_du_kwakwa,
  plume_kwak_flamme,
  poil_arakne_malade,
  potion_de_rappel,
  potion_de_souvenir,
  rougely,
  sauge,
  substrat_de_buisson,
  tatouage_de_mauvais_garcon,
  trefle_5_feuilles,
  vertgely,
]
