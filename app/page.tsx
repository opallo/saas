"use client";
import Header from "@/components/Header";
import CheckoutButton from "@/components/CheckoutButton";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center py-24 text-center space-y-6">
        <h1 className="text-5xl font-extrabold">SaaS Starter Kit</h1>
        <p className="max-w-md text-lg text-gray-300">
          Kickstart your next idea with authentication, payments, and database
          scaffolding already configured.
        </p>
        <CheckoutButton />
      </main>
    </div>
  );
}

