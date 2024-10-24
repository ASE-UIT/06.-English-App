/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Section {
  handling: boolean
  current: number
  pickType: string
  data: {
    [key: number]: {
      type: string
    }, 
  }
}

export interface SectionData {
  [key: number]: {
    type: string
  }
}
