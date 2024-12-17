import { useInjectReducer } from "redux-injectors"

import { actions, key, reducer } from "./reducer"

export const useCourseSlice = () => {
  useInjectReducer({ key, reducer })
  return { actions }
}