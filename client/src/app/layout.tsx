import type { Metadata } from 'next'
import '@sty/_index.min.scss'


export const metadata: Metadata = {
  title: 'GitHub Profile Screen',
  description: 'Project created as a clone of the GitHub Screen Profile',
  icons: {
    icon: '/github.ico',
  },
}

export default function RootLayout({ children }:
  Readonly<{ children: React.ReactNode }>
) {
  return (
    <html lang='en'>
      <body>
        { children }
      </body>
    </html>
  )
}