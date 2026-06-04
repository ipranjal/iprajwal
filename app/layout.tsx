import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prajwal Pandey – Technical Game Designer',
  description:
    'Portfolio of Prajwal Pandey, Technical Game Designer at Ubisoft.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-zinc-950 text-zinc-200">{children}</body>
    </html>
  )
}
