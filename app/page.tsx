// app/page.tsx
'use client';
import Header from 'components/Header';
import CheckoutButton from 'components/CheckoutButton';

export default function HomePage() {
  return (
    <div>
      <Header />
      <CheckoutButton />
    </div>
  );
}
