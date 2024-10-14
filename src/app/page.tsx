// src/app/page.tsx
import { SignIn } from '@clerk/nextjs';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Homepage!</h1>
      <p>This is the main content of the page.</p>
      
      {/* Update the SignIn component with hash-based routing */}
      <SignIn routing="hash" />
    </div>
  );
}
