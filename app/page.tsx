// components/Header.tsx

import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

const Header: React.FC = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: 20 }}>
      <h1>jonkler LLM 😈</h1>
      <SignedIn>
        {/* Render the UserButton with TypeScript typings */}
        <UserButton 
          showName={false}  // Show user's name
          userProfileMode="modal" // Open user profile as a modal
          afterSwitchSessionUrl="/" // Redirect after session switch
        />
      </SignedIn>
      <SignedOut>
        {/* Render the SignInButton for users who are not signed in */}
        <SignInButton />
      </SignedOut>
    </header>
  );
};

export default Header;
