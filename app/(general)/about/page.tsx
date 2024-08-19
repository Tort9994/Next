import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "About",
    description: "About",
    keywords: ["About Page", "Alfonso"]
}

export default function AboutPage() {
    return (
        <span className="text-7xl">About Page</span>
    )
}