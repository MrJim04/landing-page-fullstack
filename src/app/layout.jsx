import '@picocss/pico'
import './globals.css'

export const metadata = {
  title: 'Jimwell Ibay',
  description: "It's all about Jimwell Ibay and he's journey in software engineering",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
