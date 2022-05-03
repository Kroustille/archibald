import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'

import { itemsReducer } from '@/store/items/slice'

const store = configureStore({
  reducer: { items: itemsReducer }
})

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store