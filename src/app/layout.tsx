import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from 'react-hot-toast';


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    metadataBase: new URL(process.env.BASE_URL || 'https://mawit.dev'),
    title: {
        default: "Mawit Bikom Gad | Full-Stack Web Developer",
        template: "%s | Mawit Bikom Gad"
    },
    description: "Personal portfolio of Mawit Bikom Gad, a Full-Stack Web Developer based in Buea, Cameroon. Building digital experiences with modern technologies.",
    keywords: ["Mawit Bikom Gad", "Software Engineer", "Full-Stack Developer", "Web Developer", "React", "Next.js", "TypeScript", "Cameroon", "Buea"],
    authors: [{ name: "Mawit Bikom Gad" }],
    creator: "Mawit Bikom Gad",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: process.env.BASE_URL || "https://mawit.dev",
        title: "I Build Web Apps That Drive Revenue | Mawit Bikom Gad",
        description: "Custom web solutions that convert visitors into customers. Specialized in high-performance React/Next.js apps for growing businesses.",
        siteName: "Mawit Bikom Gad Portfolio",
        images: [
            {
                url: '/images/personal-website-thumbnail.png',
                width: 1200,
                height: 630,
                alt: 'Mawit Bikom Gad Portfolio',
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "I Build Web Apps That Drive Revenue | Mawit Bikom Gad",
        description: "Custom web solutions that convert visitors into customers. Specialized in high-performance React/Next.js apps for growing businesses.",
        creator: "@MawitGad",
        images: ['/images/personal-website-thumbnail.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

// ... existing code ...

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.variable} antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                >
                    {children}
                    <Toaster position="bottom-right" />
                </ThemeProvider>
            </body>
        </html>
    );
}
