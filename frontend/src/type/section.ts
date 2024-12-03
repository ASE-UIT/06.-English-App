import { Response } from "."

export const Section = [
  {
    key: "ROOT",
    text: "Root",
  },
  {
    key: "LISTENING",
    text: "Listening",
  },
  {
    key: "READING",
    text: "Reading",
  },
  {
    key: "VOCABULARY",
    text: "Vocabulary",
  },
]

export const sectionNameMap = Object.fromEntries(Section.map(({ key, text }) => [key, text]))

export interface Section {
  id: string
  title: string
  content: string
  type: string
  sectionMedia: string
  createDate: string
}

export interface SectionRes extends Response {
  data: Section[]
}

export interface SectionCreate {
  title: string
  content: string
  type: string
  lessonId: string
  sectionMedia: string
}
