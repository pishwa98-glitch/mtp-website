import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ماهان تجارت پیشوا (MTP)',
  description: 'واردات تجهیزات مصرفی پزشکی',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
