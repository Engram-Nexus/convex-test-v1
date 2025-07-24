import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ConvexClientProvider } from './ConvexClientProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'convex-test-v1',
  description: 'A modern app built with Next.js, Convex, and Zustand',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
