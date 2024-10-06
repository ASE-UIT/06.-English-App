import { createSlice } from "@reduxjs/toolkit"

import { initialState } from "./selectors"

const slice = createSlice({
  name: "section",
  initialState,
  reducers: {
    loadSections(state, action) {
      state.handling = true
      state.data = {
        ...state.data,
        ...action.payload,
      }
    },
    loadSection(state, action) {
      state.data = action.payload
    },
    changeType(state, action) {
      state.pickType = action.payload
    },
    changeCurrentSection(state, action) {
      state.current = action.payload
    },
    loadSectionData(state, action) {
      const { id, ...data } = action.payload
      console.log("loadSectionData", id, data)
      state.data[id] = {
        ...data,
      }
    },
    close() {
      return initialState
    },
  },
})

export const { actions, name: key, reducer } = slice
