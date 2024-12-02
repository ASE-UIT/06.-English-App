import { Response } from "."

export const Section = [
  {
    key: "READING",
    text: "Reading",
  },
  {
    key: "LISTENING",
    text: "Listening",
  },
  {
    key: "WRITING",
    text: "Writing",
  },
  {
    key: "SPEAKING",
    text: "Speaking",
  },
]

export const sectionNameMap = Object.fromEntries(Section.map(({ key, text }) => [key, text]))

export interface Section {
  lessionId: string
  title: string
  content: string
  type: string
  sectionMedia: string
}

export interface SectionRes extends Response {
  data: Section[]
}

export interface SectionCreate {
  lessionId: string
  title: string
  content: string
  type: string
  sectionMedia: string
}
