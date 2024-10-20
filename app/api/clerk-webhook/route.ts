import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import { supabase } from '@/utils/supabase/client'



export async function POST(req: Request) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the endpoint
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET

  if (!WEBHOOK_SECRET) {
    throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
  }

  // Get the headers
  const headerPayload = headers()
  const svix_id = headerPayload.get('svix-id')
  const svix_timestamp = headerPayload.get('svix-timestamp')
  const svix_signature = headerPayload.get('svix-signature')

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400,
    })
  }

  // Get the body
  const payload = await req.json()
  const body = JSON.stringify(payload)

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET)

  let evt: WebhookEvent

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error occured', {
      status: 400,
    })
  }

  // Do something with the payload
  // For this guide, you simply log the payload to the console
  // const { id } = evt.data
  // const eventType = evt.type
  // console.log(`Webhook with and ID of ${id} and type of ${eventType}`)
  // console.log('Webhook body:', body)


  // Check if user exists in supabase and retrieve user data
  if (evt.type === 'session.created') {
    
    // Get user ID from event data
    console.log('userID:', evt.data.user_id)

    // Query supabase to check if user exists
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', evt.data.user_id)

    // If no user is found, create a new user in supabase
    if(!data || data.length === 0){
      console.log("No user found")  
    }else{
      console.log("User found: " + JSON.stringify(data))
    }

    // Handle any errors that occurred during the query
    if (error) {
      console.error('Error fetching user:', error)
      }

    // Log the user data
    console.log("DATA: " + JSON.stringify(data))
  }

  // Return a success response
  return new Response('', { status: 200 })
}