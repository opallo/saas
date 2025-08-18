'use client';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-6">
      <h1 className="text-xl font-semibold">SaaS App</h1>
      <nav className="flex items-center gap-4">
        <SignedIn>
          <UserButton
            showName={false}
            userProfileMode="modal"
            afterSwitchSessionUrl="/"
          />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </nav>
    </header>
  );
};

export default Header;

