export default function EmptyLayout({ children }: { children: React.ReactNode }) {
  return <div className="w-screen h-screen flex-1 bg-white">{children}</div>
}
