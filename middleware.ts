import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const publicRoutes = createRouteMatcher([
  '/api/clerk-webhook(.*)',
  // Add other specific public routes here, e.g.:
  // '/about',
  // '/pricing',
])

export default clerkMiddleware((auth, req) => {
  if (!publicRoutes(req)) {
    auth().protect()
  }
})

export const config = {
  matcher: [
    '/((?!.+\\.[\\w]+$|_next).*)',
    '/',
    '/(api|trpc)(.*)',
  ],
}
