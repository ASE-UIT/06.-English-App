/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSelector } from "@reduxjs/toolkit"
import _ from "lodash"
import { Section } from "../interface"

export const initialState: Section = {
  handling: false,
  current: 1,
  pickType: "",
  data: {
    1: {
      type: "Multiple choices",
    },
  },
}

const selectDomain = (state: any) => {
  console.log("selectDomain", state)
  return state.section || initialState
}
const selectPath = (_state: any, path: any) => path
export const selectSections = createSelector([selectDomain], (state: Section) => state.data ?? {})
export const selectSectionCurrent = createSelector([selectDomain], (state: Section) => state.current)
export const selectPickType = createSelector([selectDomain], (state: Section) => state.pickType)
export const selectSectionData = createSelector([selectSections, selectPath], (state, path) => _.get(state, path))
export const selectSectionHandling = createSelector([selectDomain], (state) => state.handling)
