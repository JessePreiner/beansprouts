import { ThemeProvider } from '@mui/material/styles'
import './globals.css'
import theme from './theme'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AppProps } from 'next/app'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bean Sprouts Childcare Co-Op',
  description: 'Licensed childcare in Saskatoon',
}

export interface MyProps extends AppProps {
  children?: React.ReactNode,
}

export default function RootLayout({
  children, Component, pageProps:PageProps
}: MyProps
) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ThemeProvider>
  )
}
