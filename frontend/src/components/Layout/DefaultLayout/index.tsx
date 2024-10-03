import Header from "../Components/Header"
export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-blue-600">
      <Header />
      <div className="mb-4 w-full max-w-6xl flex-1">{children}</div>
    </div>
  )
}
