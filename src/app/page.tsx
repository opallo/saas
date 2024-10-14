// src/app/page.tsx
import { SignIn } from '@clerk/nextjs';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Homepage!</h1>
      <p>This is the main content of the page.</p>
      
      {/* This will display the Clerk Sign-In form */}
      <SignIn />
    </div>
  );
}
