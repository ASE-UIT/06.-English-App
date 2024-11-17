import { configureStore } from "@reduxjs/toolkit"
import { createReducer } from "./reducers"
export function configureAppStore() {
  const store = configureStore({
    reducer: createReducer,
  })
  return store
}
