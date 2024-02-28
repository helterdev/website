import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import { StateProvider } from '@/context/StateContext';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Website Store',
  description: 'Website from store',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <StateProvider>
          <Navbar />
          {children}
        </StateProvider>
      </body>
    </html>
  );
}
