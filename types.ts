export interface Activity {
  id: string; // Identifiant unique
  name: string;
  category: keyof typeof import('./constants').ACTIVITY_CATEGORIES;
  description: string;
  icon: string;
  order: number; // Pour le tri
}

export type UserName = keyof typeof import('./constants').USERS;

// Ce type est corrigé pour être plus robuste. Il n'hérite plus directement de Activity
// pour éviter toute ambiguïté avec le champ 'id'.
export interface ScheduledActivity extends Omit<Activity, 'id'> {
  id: string; // L'identifiant unique de l'élément planifié
  activity_id: string; // L'ID de l'activité originale
  scheduledBy: UserName;
  date: string;
}

export type ScheduledActivities = Record<string, ScheduledActivity[]>;