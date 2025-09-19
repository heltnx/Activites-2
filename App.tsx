import React, { useState, useCallback } from 'react';
import { Activity, ScheduledActivities, ScheduledActivity, UserName } from './types';
import ActivitySidebar from './components/ActivitySidebar';
import Calendar from './components/Calendar';
import UserSelector from './components/UserSelector';
import ActivityDetailModal from './components/ActivityDetailModal';
import { USERS, INITIAL_ACTIVITIES } from './constants';

function App() {
  const [activities] = useState<Activity[]>(INITIAL_ACTIVITIES);
  const [scheduledActivities, setScheduledActivities] = useState<ScheduledActivities>({});
  const [currentUser, setCurrentUser] = useState<UserName>(Object.keys(USERS)[0] as UserName);
  const [viewingActivity, setViewingActivity] = useState<ScheduledActivity | null>(null);

  const handleDropActivity = useCallback((date: string, activityId: string) => {
    const activityToSchedule = activities.find(a => a.id === activityId);
    if (!activityToSchedule) {
      console.error("Activité à planifier introuvable:", activityId);
      return;
    }

    // FIX: The 'order' property was being destructured and thus excluded from restOfActivity.
    // It is required by the ScheduledActivity type, so it's now included in the spread.
    const { id, ...restOfActivity } = activityToSchedule;

    const newScheduledActivity: ScheduledActivity = {
      ...restOfActivity,
      id: `${date}-${activityId}-${Date.now()}`, // ID unique pour cette instance planifiée
      activity_id: activityToSchedule.id,
      scheduledBy: currentUser,
      date: date,
    };
    
    setScheduledActivities(prev => {
        const activitiesForDate = prev[date] ? [...prev[date], newScheduledActivity] : [newScheduledActivity];
        return { ...prev, [date]: activitiesForDate };
    });
  }, [activities, currentUser]);
  
  const handleRemoveActivity = useCallback((date: string, scheduledActivityId: string) => {
    setScheduledActivities(prev => {
      const activitiesForDate = (prev[date] || []).filter(act => act.id !== scheduledActivityId);
      const newSchedule = { ...prev };
      if (activitiesForDate.length > 0) {
        newSchedule[date] = activitiesForDate;
      } else {
        delete newSchedule[date];
      }
      return newSchedule;
    });
  }, []);

  return (
    <div className="flex h-screen w-screen bg-slate-100 font-sans text-slate-800">
        <ActivitySidebar
            activities={activities}
        />
        <main className="flex-1 flex flex-col p-4 gap-4 overflow-y-auto">
            <header className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-slate-700">Planificateur d'Activités 2025</h1>
                <UserSelector
                    users={USERS}
                    currentUser={currentUser}
                    onSelectUser={setCurrentUser}
                />
            </header>
            <div className="flex-1">
                <Calendar
                    scheduledActivities={scheduledActivities}
                    onDropActivity={handleDropActivity}
                    onRemoveActivity={handleRemoveActivity}
                    onViewActivity={setViewingActivity}
                />
            </div>
        </main>
        {viewingActivity && (
            <ActivityDetailModal
                activity={viewingActivity}
                onClose={() => setViewingActivity(null)}
            />
        )}
    </div>
  );
}

export default App;
