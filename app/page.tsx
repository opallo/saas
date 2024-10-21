// app/page.tsx
'use client';
import Header from 'components/Header';
import CheckoutButton from 'components/CheckoutButton';
import { useUser } from '@clerk/nextjs'

export default function HomePage() {
  const { isLoaded, isSignedIn, user } = useUser()
  if (!isLoaded || !isSignedIn) {
    return null
  }

  return (
    <div>
      <Header />
      <div>Hello, {user.firstName} ! welcome to Clerk</div>
      {user.emailAddresses.map((email) => (
        <div key={email.emailAddress}>{email.emailAddress}</div>
      ))}
      {user.id}
      <CheckoutButton />
    </div>
  );
}


