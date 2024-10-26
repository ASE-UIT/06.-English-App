import React from "react"

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <div className="w-screen bg-red-400">{children}</div>
}
