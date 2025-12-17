import { combineReducers, Reducer, Action } from '@reduxjs/toolkit'
import app from '@/app/features/app.slice'

export const combinedReducer = combineReducers({
  app,
})

export type RootState = ReturnType<typeof combinedReducer>

export const rootReducer: Reducer<RootState, Action> = (state, action) => {
  return combinedReducer(state, action)
}
