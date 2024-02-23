import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextJS Demo App - ScriptBytes Youtube',
  description: 'A NextJS demo app I use for the videos on my Youtube channel.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Nav></Nav>
        <div className='p-8'>{children}</div>
      </body>
    </html>
  );
}
