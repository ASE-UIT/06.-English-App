import Header from "@/components/Tam-components/Header"

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <div className="mb-4 w-full flex-1">{children}</div>
      <Header></Header>
      <div className="mb-4 max-w-screen-2xl flex-1">{children}</div>
    </div>
  )
}
