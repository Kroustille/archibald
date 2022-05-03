import { AppState } from '@/store'
import { Item } from '@/models/item'
import { all_items } from '@/data/items'
import { createSlice } from '@reduxjs/toolkit'

export interface ItemState {
  all: Record<string, Item>
}

const initialItems = all_items.reduce((acc, item) => {
  acc[item.id] = item
  return acc
}, {} as Record<string, Item>)

const initialState: ItemState = {
  all: initialItems
}

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    updateItem: (state: ItemState, { payload }) => {
      const { item } = payload
      console.log(item)
      return {
        ...state,
        all: {
          ...state.all,
          [item.id]: item
        }
      }
    }
  }
})

export const { updateItem } = itemsSlice.actions

export const selectItem = (state: AppState, item_id: string): Item => ({ ...state.items.all[item_id] })
export const selectItems = (state: AppState): Item[] => Object.values(state.items.all)

export const itemsReducer = itemsSlice.reducer  