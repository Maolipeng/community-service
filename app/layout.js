"use client";

import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col bg-gray-100">
          {children}
        </main>
      </body>
    </html>
  );
}