import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { all_items, multigely } from '@/data/items'

import { AppState } from '@/store'
import { Item } from '@/models/item'

export interface ItemState {
  all: Record<string, Item>
  current_item_id: string
}

const initialItems = all_items.reduce((acc, item) => {
  acc[item.id] = item
  return acc
}, {} as Record<string, Item>)

const initialState: ItemState = {
  all: initialItems,
  current_item_id: multigely.id
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
    }
  }
})

export const { updateItem, setCurrentItem } = itemsSlice.actions

export const selectUnitPrice = (state: AppState, item_id: string): number => {
  const item = state.items.all[item_id]
  if (!item) {
    return 0
  }

  if (!item.ingredients.length) {
    return item.pricePerBatch / item.batchSize
  }

  return item.ingredients.reduce((total_price, ingredient) => {
    const ingredient_item = state.items.all[ingredient.item_id]
    if (!ingredient_item) {
      console.warn('item not found', ingredient.item_id)
      return total_price
    }

    return selectUnitPrice(state, ingredient_item.id)
  }, 0)
}

export const selectCurrentItem = (state: AppState): Item =>  ({ ...state.items.all[state.items.current_item_id] })
export const selectCraftableItems = (state: AppState): Item[] => Object.values(state.items.all).filter(item => item.ingredients.length)
export const selectItem = (state: AppState, item_id: string): Item | null => (state.items.all[item_id] ? { ...state.items.all[item_id] } : null)

export const itemsReducer = itemsSlice.reducer  