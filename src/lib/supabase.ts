import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

// Using Service Role Key for backend administrative tasks as per requirement
// During build time, these might be missing, so we fallback to empty strings to allow build to pass.
// Validation should happen at runtime when the client is actually used.
export const supabase = createClient(
    supabaseUrl || "https://placeholder.supabase.co",
    supabaseServiceRoleKey || "placeholder-key",
    {
        auth: {
            persistSession: false,
        },
    }
)
