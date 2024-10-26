# AI SaaS Template

A minimal, full-stack SaaS template with Clerk, Stripe, and Supabase, and OpenAI.

## **Tech Stack**

### **Frontend**

- **Next.js**: Core app framework handling SSR, routing, UI, and API routes.
- **React**: Library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.

### **Backend**

- **Next.js API Routes**: Serverless functions for backend logic.
- **Supabase**: Database for user data and real-time functionality, seamlessly integrates with Clerk using JWT tokens.


### **Authentication & Payments**

- **Clerk**: Authentication for user sign-ups, logins, and social login support.
- **Stripe**: Payment gateway for subscription management and payments.

### **AI Integration**

- **OpenAI API**: For generating AI responses.

### **Deployment**

- **Vercel**: Automatic scaling and serverless functions for hosting and APIs.

---

## **User Flow Overview**

1. User signs up or logs in via **Clerk**.
2. After login, user accesses the dashboard.
3. User can interact with the OpenAI-powered chat interface.
4. Subscription can be processed through **Stripe**.
5. User data and interactions can be stored in **Supabase**.
6. The app is deployed and updated on **Vercel**.

## **Project Structure**

- `app/`: Next.js app directory
  - `api/`: API routes for OpenAI, Stripe checkout, and webhooks
  - `page.tsx`: Main page component
  - `layout.tsx`: Root layout component
  - `globals.css`: Global styles
- `components/`: Reusable React components
- `public/`: Static assets
- `types.ts`: TypeScript type definitions
- `middleware.ts`: Clerk authentication middleware

## **Getting Started**

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables (see `.env.example`)
4. Run the development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## **Deployment**

The app is configured for easy deployment on Vercel. Connect your GitHub repository to Vercel for automatic deployments.
