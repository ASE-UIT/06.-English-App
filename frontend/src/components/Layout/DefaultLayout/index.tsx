import Header from "@/components/Tam-components/Header"

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header></Header>
      <div className="mb-4 max-w-screen-2xl flex-1">{children}</div>
    </div>
  )
}
