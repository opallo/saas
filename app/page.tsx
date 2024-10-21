// app/page.tsx
'use client';
import Header from 'components/Header';
import CheckoutButton from 'components/CheckoutButton';

export default function Home() {

  return (
    <div>
      <Header />
      <CheckoutButton />
    </div>
  );
}
