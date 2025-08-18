import Header from "@/components/Header";
import CheckoutButton from "@/components/CheckoutButton";
import Footer from "@/components/Footer";

const features = [
  {
    title: "Authentication",
    description: "Clerk is wired up for sign ups and sessions out of the box.",
  },
  {
    title: "Payments",
    description: "Stripe Checkout is pre-configured so you can charge users quickly.",
  },
  {
    title: "Database",
    description: "Supabase gives you a Postgres database with an instant API.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-gray-900 to-black py-32 text-center">
          <h1 className="mx-auto max-w-2xl text-5xl font-bold tracking-tight text-white sm:text-6xl">
            Launch your SaaS faster
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            A minimal starter with auth, payments, and database ready so you can
            focus on your product.
          </p>
          <div className="mt-10 flex justify-center">
            <CheckoutButton />
          </div>
        </section>

        {/* Features */}
        <section className="py-24">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to action */}
        <section className="bg-gradient-to-b from-black to-gray-900 py-24 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to build?</h2>
          <p className="mx-auto mt-4 max-w-md text-gray-400">
            Grab the starter and start shipping features today.
          </p>
          <div className="mt-8 flex justify-center">
            <CheckoutButton />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

