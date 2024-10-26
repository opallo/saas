'use client'
import { useEffect, useState, useMemo } from 'react'
import { useSession, useUser } from '@clerk/nextjs'
import { createClient } from '@supabase/supabase-js'
import Header from '@/components/Header'
import CheckoutButton from '@/components/CheckoutButton'

// Define the Task interface
interface Task {
  id: number;
  name: string;
  // Add other properties if needed
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('')
  // Use the `useUser()` hook to get information about the logged-in user
  const { user } = useUser()
  // Use the `useSession()` hook to get the Clerk session object
  const { session } = useSession()
  // State to hold the OpenAI response
  const [openAIResponse, setOpenAIResponse] = useState('')
  const [openAIPrompt, setOpenAIPrompt] = useState('')
  const [isLoadingAI, setIsLoadingAI] = useState(false)

  // Create a custom Supabase client that injects the Clerk Supabase token into the request headers
  const client = useMemo(() => {
    return createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        global: {
          // Get the custom Supabase token from Clerk and include it in the fetch options
          fetch: async (url, options = {}) => {
            const clerkToken = await session?.getToken({
              template: 'supabase',
            })

            // Add the Clerk Supabase token to the headers
            const headers = new Headers(options?.headers)
            headers.set('Authorization', `Bearer ${clerkToken}`)

            // Make the fetch request with the updated headers
            return fetch(url, {
              ...options,
              headers,
            })
          },
        },
      },
    )
  }, [session])

  // Load tasks for the logged-in user when the User object is available
  useEffect(() => {
    if (!user) return

    async function loadTasks() {
      setLoading(true)
      const { data, error } = await client.from('tasks').select()
      if (!error) setTasks(data as Task[])
      setLoading(false)
    }

    loadTasks()
  }, [user, client])

  // Handle task creation
  async function createTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const { data, error } = await client.from('tasks').insert({ name }).select()
    if (!error && data) {
      setTasks([...tasks, ...data])
      setName('')
    }
  }

  // Fetch a response from the OpenAI API
  async function getOpenAIResponse() {
    setIsLoadingAI(true)
    try {
      const response = await fetch('/api/openai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: openAIPrompt,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch OpenAI response');
      }

      const data = await response.json();
      setOpenAIResponse(data.content);
    } catch (error) {
      console.error('Error fetching OpenAI response:', error);
      setOpenAIResponse('Error fetching response from OpenAI');
    } finally {
      setIsLoadingAI(false)
    }
  }

  return (
    <div>
      <Header />
      <CheckoutButton />

      {/* OpenAI prompt form */}
      <div>
        <h2>Ask OpenAI</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          getOpenAIResponse();
        }}>
          <input
            type="text"
            value={openAIPrompt}
            onChange={(e) => setOpenAIPrompt(e.target.value)}
            placeholder="Enter your prompt"
          />
          <button type="submit" disabled={isLoadingAI}>
            {isLoadingAI ? 'Loading...' : 'Get Response'}
          </button>
        </form>
        {openAIResponse && (
          <div>
            <h3>OpenAI Response:</h3>
            <p>{openAIResponse}</p>
          </div>
        )}
      </div>

      {/* Existing tasks section */}
      <h1>Tasks</h1>

      {loading && <p>Loading...</p>}

      {!loading && tasks.length > 0 && tasks.map((task: Task) => <p key={task.id}>{task.name}</p>)}

      {!loading && tasks.length === 0 && <p>No tasks found</p>}

      <form onSubmit={createTask}>
        <input
          autoFocus
          type="text"
          name="name"
          placeholder="Enter new task"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}
