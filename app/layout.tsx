// src/app/layout.tsx

import { ClerkProvider } from '@clerk/nextjs';
import Page from './page'; // Corrected import path

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ClerkProvider>
      <Page />
      {children} {/* Ensure children are wrapped inside the ClerkProvider */}
    </ClerkProvider>
  );
};

export default RootLayout;
