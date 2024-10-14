// src/app/layout.tsx
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css'; // Import your global CSS if you have any

export const metadata = {
  title: 'Your App Title',
  description: 'Your app description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
