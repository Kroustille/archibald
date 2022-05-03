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
    updateItem: (state: ItemState, { payload }: PayloadAction<{ item: Item }>) => {
      const { item } = payload
      return {
        ...state,
        all: {
          ...state.all,
          [item.id]: item
        }
      }
    },
    setSelectedItem: (state: ItemState, { payload }: PayloadAction<{ item_id: string}>) => {
      const { item_id } = payload
      return {
        ...state,
        selected_item_id: item_id
      }
    }
  }
})

export const { updateItem, setSelectedItem } = itemsSlice.actions

export const selectCurrentItem = (state: AppState): Item =>  ({ ...state.items.all[state.items.current_item_id] })
export const selectCraftableItems = (state: AppState): Item[] => Object.values(state.items.all).filter(item => item.ingredients.length)
export const selectItem = (state: AppState, item_id: string): Item => ({ ...state.items.all[item_id] })

export const itemsReducer = itemsSlice.reducer  