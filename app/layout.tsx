import type { Metadata } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const display = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'Prajwal Pandey – Technical Game Designer',
  description: 'Portfolio of Prajwal Pandey, Technical Game Designer at Ubisoft.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={`bg-[#080808] text-zinc-200 antialiased ${inter.className} ${display.variable}`}>
        {children}
      </body>
    </html>
  )
}
