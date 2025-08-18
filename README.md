# AI SaaS Template

A minimal, full-stack SaaS starter you can clone to kickstart new projects quickly.

## **Tech Stack**

### **Frontend**

- **Next.js**: Core app framework handling SSR, routing, UI, and API routes.

### **Backend**

- **Supabase**: Database for user data, AI interaction logs, and real-time functionality.
- **Prisma**: ORM to define and interact with the Supabase database.

### **Authentication & Payments**

- **Clerk**: Authentication for user sign-ups, logins, and social login support.
- **Stripe**: Payment gateway for subscription management and payments.

### **Deployment**

- **Vercel**: Automatic scaling and serverless functions for hosting and APIs.

---

## **User Flow Overview**

1. User signs up or logs in via **Clerk**.
2. Subscription is processed through **Stripe**.
3. After login, user accesses dashboard via **Next.js**.
4. Data is stored and managed in **Supabase** using **Prisma**.
5. App is deployed and updated on **Vercel**.

## **Starting a New Project**

Use the provided script to copy this template into a fresh directory and reinitialize git:

```bash
./scripts/init-new.sh my-new-app
```

This copies the template into `my-new-app`, installs dependencies, and sets up a new git repository.
