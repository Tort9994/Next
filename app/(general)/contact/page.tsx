import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact",
    description: "Contact",
    keywords: ["Contact Page", "Alfonso"]
}


export default function ContactPage() {
    return (<div className="flex min-h-screen flex-col">
        <span className="text-7xl">Contact Page</span>
    </div>


    )
}