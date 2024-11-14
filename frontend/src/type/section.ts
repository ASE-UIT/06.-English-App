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
