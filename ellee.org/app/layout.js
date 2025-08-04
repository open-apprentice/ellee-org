import '@/styles/globals.css';

import { roboto, inter } from './fonts';
import { cn } from '../lib/utils';

import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ShoutOut from '@/components/ShoutOut';

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
    <html
      lang='en'
      suppressHydrationWarning
      className={`${roboto.variable} ${inter.variable}`}
    >
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased bg-[url('/images/white-background.png')] dark:bg-[url('/images/black-background.png')] bg-cover bg-no-repeat"
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <ShoutOut />
          <Header />

          {children}

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
