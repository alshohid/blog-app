import './globals.css'
import TopNav from '@/Components/TopNav'

import { Inter } from 'next/font/google'
import FooterComponent from '@/Components/FooterComponent'
import GoBackButton from '@/Components/GoBackButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNav/>
        <GoBackButton/>
        {children}
        <FooterComponent/>
      
      
      </body>
    </html>
  )
}
