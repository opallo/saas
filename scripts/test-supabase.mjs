import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!url || !key) {
  console.error(
    'Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables.'
  );
  process.exit(1);
}

const client = createClient(url, key, { auth: { persistSession: false } });

try {
  const { data: inserted, error: insertError } = await client
    .from('connection_test')
    .insert({})
    .select()
    .single();

  if (insertError) throw insertError;

  const { error: deleteError } = await client
    .from('connection_test')
    .delete()
    .eq('id', inserted.id);

  if (deleteError) throw deleteError;

  console.log('Supabase write/read test succeeded');
  process.exit(0);
} catch (err) {
  console.error('Supabase test failed:', err.message);
  process.exit(1);
}

