// src/app/layout.tsx

import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';

export const metadata = {
  title: '🎈 SaaS App 🎈',
  description: 'Foundation for building SaaS applications - have fun!!',
  icons: {
    icon: './favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
