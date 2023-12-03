import '@/styles/globals.css';

import { roboto, inter } from './fonts';
import { cn } from '../lib/utils';

import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/Header';

export const metadata = {
  title: 'Ellee.org | A modern LMS for the blockchain age',
  description:
    'The Ellee LMS brings teaching and learning to modern times. Discover how you can actual teach your expertise.',
  icons: {
    icon: 'icons/favicon-32x32.png',
    shortcut: 'icons/safari-pinned-tab.svg',
    apple: 'icons/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${cn(
          'min-h-screen bg-background font-sans antialiased'
        )} ${roboto.variable} ${inter.variable}`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Header />

          {children}
        </ThemeProvider>
        {children}
      </body>
    </html>
  );
}
