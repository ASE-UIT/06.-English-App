export interface reduxState {
  state: {
    user: string
  }
}

export interface Field {
  text: string
}

export interface Answer {
  text: string
  correct?: boolean
  isCorrect?: boolean
}

export interface Question {
  text: string
  type: string
  answer?: Answer[]
  order: number // Trường order là tùy chọn
}
export interface SidebarContextProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  animate: boolean
}
export type Response = {
  statusCode: number
  message: string
  data: unknown
}
export interface Pagination {
  page: number
  limit: number
}
