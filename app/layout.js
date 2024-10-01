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
<head>
        <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PR46VX4Q');</script>
<!-- End Google Tag Manager -->
</head>
            <body
                className={`${inter.variable} ${syne.variable} flex  justify-center  bg-black-100 text-white`}
            >
                <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PR46VX4Q"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
                <main className="min-w-3xl m-5 flex max-w-3xl flex-col gap-5 ">
                    {children}
                </main>
            </body>
        </html>
    )
}
