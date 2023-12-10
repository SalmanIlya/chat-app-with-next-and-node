"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import { Provider } from 'react-redux'
import { Store } from './Store/Store'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>Me Chat</title>
      <body className={inter.className}>
        <Provider store={Store}>
        {children}
        </Provider>
        
        </body>
    </html>
  )
}
