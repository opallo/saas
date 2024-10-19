import { auth } from "@clerk/nextjs/server";
import { createClient } from '@/utils/supabase/server';
import { redirect } from "next/navigation";

export default async function Notes() {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const supabase = createClient();

  const { data: notes } = await supabase
    .from("notes")
    .select("*")
    .eq('user_id', userId);

  return <pre>{JSON.stringify(notes, null, 2)}</pre>
}
