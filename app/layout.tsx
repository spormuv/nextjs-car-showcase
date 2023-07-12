import { Footer, Navbar } from '@/components';
import type { Metadata } from 'next';
import './globals.css';

// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Car Showcase',
  description: 'Discover the best cars',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
