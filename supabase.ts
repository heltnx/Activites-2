import { createClient } from '@supabase/supabase-js';

// TODO: Remplacez les valeurs ci-dessous par celles de votre projet Supabase.
// Vous pouvez les trouver dans les paramètres de votre projet -> API.
const supabaseUrl = 'VOTRE_URL_SUPABASE';
const supabaseAnonKey = 'VOTRE_CLE_ANON_SUPABASE';

if (!supabaseUrl || supabaseUrl === 'VOTRE_URL_SUPABASE' || !supabaseAnonKey || supabaseAnonKey === 'VOTRE_CLE_ANON_SUPABASE') {
    console.warn("Attention : Les identifiants Supabase ne sont pas configurés dans supabase.ts. L'application fonctionnera en mode hors-ligne.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
