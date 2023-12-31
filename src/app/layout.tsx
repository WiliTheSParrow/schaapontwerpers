import type { Metadata } from 'next'
import './styles/sass/global.scss'

export const metadata: Metadata = {
  title: 'Schaapontwerpers Inwerkopdracht',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
