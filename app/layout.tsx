import '../styles/globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Sydney Pro Plumbing',
  description: 'Professional Plumbing Services Across Sydney',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  )
}
