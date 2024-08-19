
export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col items-center p-24">
            <span className="text-lg">Hola mundo</span>
            {children}
        </div>
    )
}