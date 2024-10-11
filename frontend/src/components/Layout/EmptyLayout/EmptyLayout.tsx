export default function EmptyLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full max-w-screen-2xl flex-1">{children}</div>
    )
  }