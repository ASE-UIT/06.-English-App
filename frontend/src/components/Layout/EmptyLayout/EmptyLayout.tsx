export default function EmptyLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full max-w-6xl flex-1">{children}</div>
    )
  }