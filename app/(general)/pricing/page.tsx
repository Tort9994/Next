import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Pricing",
    description: "Pricing",
    keywords: ["Pricing Page", "Alfonso"]
}


export default function PricingPage() {
    return (<div className="flex min-h-screen flex-col">
        <span className="text-7xl">Pracing Page</span>
    </div>


    )
}