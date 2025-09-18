export interface Activity {
  id: number;
  name: string;
  category: keyof typeof import('./constants').ACTIVITY_CATEGORIES;
  description: string;
  icon: string;
}

export type UserName = keyof typeof import('./constants').USERS;

export interface ScheduledActivity extends Activity {
  instanceId: string;
  scheduledBy: UserName;
}

export type ScheduledActivities = Record<string, ScheduledActivity[]>;