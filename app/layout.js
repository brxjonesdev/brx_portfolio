import { Syne, Inter } from 'next/font/google'
import Logo from '@/components/brx/logo'
import Contacts from '@/components/brx/contacts'
import './globals.css'

const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-inter',
})
const syne = Syne({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-syne',
})

export const metadata = {
    title: 'Braxton Jones',
    description: 'Portfolio for Braxton Jones @brxjonesdev',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${syne.variable} flex  justify-center  bg-black-100 text-white`}
            >
                <main className="min-w-3xl m-5 flex max-w-3xl flex-col gap-5 ">
                    {children}
                </main>
            </body>
        </html>
    )
}
