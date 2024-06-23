// app/layout.js
import '../src/styles/globals.css'

export const metadata = {
  title: 'Meetly Dashboard',
  description: 'Kickstart work on Meetly',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}