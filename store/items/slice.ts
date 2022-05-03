import { Item, isCraftable } from '@/models/item'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { all_items, boufbottes } from '@/data/items'

import { AppState } from '@/store'

export interface ItemState {
  all: Record<string, Item>
  current_item_id: string
}

function indexItemsById(items: Item[]): Record<string, Item> {
  return items.reduce((acc, item) => {
    acc[item.id] = item
    return acc
  }, {} as Record<string, Item>)
}

const initialItems = indexItemsById(all_items)
const initialState: ItemState = {
  all: initialItems,
  current_item_id: boufbottes.id
}

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    updateItem: (state: ItemState, { payload }: PayloadAction<{ item: Item }>): ItemState => {
      const { item } = payload
      return {
        ...state,
        all: {
          ...state.all,
          [item.id]: item
        }
      }
    },
    setCurrentItem: (state: ItemState, { payload }: PayloadAction<{ item_id: string}>): ItemState => {
      const { item_id } = payload
      return {
        ...state,
        current_item_id: item_id
      }
    },
    resetIsHandcrafted: (state: ItemState): ItemState => {
      const new_items = Object.values(state.all).map(item => ({
        ...item,
        ingredients: item.ingredients.map(ingredient =>( {
          ...ingredient,
          is_handcrafted: false
        }))
      }))

      return {
        ...state,
        all: indexItemsById(new_items)
      }
    }
  }
})

export const { resetIsHandcrafted, setCurrentItem, updateItem } = itemsSlice.actions

export const selectUnitPrice = (state: AppState, item_id: string): number => {
  const item = state.items.all[item_id]
  if (!item) {
    return 0
  }

  if (!isCraftable(item)) {
    return item.pricePerBatch / item.batchSize
  }

  const ingredients_price = item.ingredients.reduce((total_price, ingredient) => {
    const ingredient_item = state.items.all[ingredient.item_id]
    if (!ingredient_item) {
      return total_price
    }

    if (ingredient.is_handpicked) {
      return total_price
    }

    if (!ingredient.is_handcrafted) {
      return total_price + (ingredient_item.pricePerBatch / ingredient_item.batchSize) * ingredient.count
    }

    return total_price + selectUnitPrice(state, ingredient_item.id)
  }, 0)

  return Math.ceil(ingredients_price * 100 ) / 100
}

export const selectCurrentItem = (state: AppState): Item =>  ({ ...state.items.all[state.items.current_item_id] })
export const selectCraftableItems = (state: AppState): Item[] => Object.values(state.items.all).filter(isCraftable)
export const selectItem = (state: AppState, item_id: string): Item | null => (state.items.all[item_id] ? { ...state.items.all[item_id] } : null)
export const selectItems = (state: AppState, item_ids: string[]): Item[] => item_ids.reduce((acc, item_id) => {
  const item = selectItem(state, item_id)
  if(!item) {
    return acc
  }

  return [...acc, item]
}, new Array<Item>())

export const itemsReducer = itemsSlice.reducer
