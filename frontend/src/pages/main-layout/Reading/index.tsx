import { Header } from "@/components/Reading/Layout/Header"
import { Sidebar } from "@/components/Reading/Layout/Sidebar"
import React from "react"

export const Reading = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="w-full">{children}</div>
      </div>
    </div>
  )
}
