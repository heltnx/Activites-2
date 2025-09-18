import React, { useState, useCallback, useEffect } from 'react';
import { Activity, ScheduledActivities, ScheduledActivity, UserName } from './types';
import ActivitySidebar from './components/ActivitySidebar';
import Calendar from './components/Calendar';
import UserSelector from './components/UserSelector';
import EditActivityModal from './components/EditActivityModal';
import AddActivityModal from './components/AddActivityModal';
import ActivityDetailModal from './components/ActivityDetailModal';
import { USERS } from './constants';
import { api } from './api';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [scheduledActivities, setScheduledActivities] = useState<ScheduledActivities>({});
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<UserName>(Object.keys(USERS)[0] as UserName);
  const [editingActivity, setEditingActivity] = useState<Activity | null>(null);
  const [isAddingActivity, setIsAddingActivity] = useState(false);
  const [viewingActivity, setViewingActivity] = useState<ScheduledActivity | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [fetchedActivities, fetchedSchedule] = await Promise.all([
          api.getActivities(),
          api.getScheduledActivities(),
        ]);
        setActivities(fetchedActivities);
        setScheduledActivities(fetchedSchedule);
      } catch (error) {
        console.error("Erreur lors du chargement des données initiales", error);
        // On pourrait afficher un message d'erreur à l'utilisateur ici
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleDropActivity = useCallback((date: string, activity: Activity, user: UserName) => {
    const freshActivity = activities.find(a => a.id === activity.id) || activity;
    const newScheduledActivity: ScheduledActivity = {
      ...freshActivity,
      instanceId: `${date}-${freshActivity.id}-${Date.now()}`,
      scheduledBy: user,
    };

    setScheduledActivities(prev => {
      const activitiesForDate = prev[date] ? [...prev[date]] : [];
      activitiesForDate.push(newScheduledActivity);
      const newSchedule = { ...prev, [date]: activitiesForDate };
      api.saveScheduledActivities(newSchedule).catch(e => {
          console.error("La sauvegarde du calendrier a échoué", e);
          // On pourrait ici annuler la modification et notifier l'utilisateur
      });
      return newSchedule;
    });
  }, [activities]);
  
  const handleRemoveActivity = useCallback((date: string, instanceId: string) => {
    setScheduledActivities(prev => {
      const activitiesForDate = prev[date] || [];
      const updatedActivities = activitiesForDate.filter(act => act.instanceId !== instanceId);
      
      const newSchedule = { ...prev };
      if (updatedActivities.length > 0) {
        newSchedule[date] = updatedActivities;
      } else {
        delete newSchedule[date];
      }
      api.saveScheduledActivities(newSchedule).catch(e => console.error("La sauvegarde du calendrier a échoué", e));
      return newSchedule;
    });
  }, []);

  const handleUpdateActivity = (updatedActivity: Activity) => {
    const newActivities = activities.map(act => (act.id === updatedActivity.id ? updatedActivity : act));
    setActivities(newActivities);
    api.saveActivities(newActivities).catch(e => console.error("La sauvegarde des activités a échoué", e));
    
    setScheduledActivities(prevScheduled => {
        const newScheduled = { ...prevScheduled };
        Object.keys(newScheduled).forEach(date => {
            newScheduled[date] = newScheduled[date].map(act => 
                act.id === updatedActivity.id ? { ...act, ...updatedActivity } : act
            );
        });
        api.saveScheduledActivities(newScheduled).catch(e => console.error("La sauvegarde du calendrier a échoué", e));
        return newScheduled;
    });

    setEditingActivity(null);
  };

  const handleAddActivity = (newActivityData: Omit<Activity, 'id'>) => {
    const newActivity: Activity = {
      ...newActivityData,
      id: Date.now(), // simple unique ID
    };
    const newActivities = [newActivity, ...activities];
    setActivities(newActivities);
    api.saveActivities(newActivities).catch(e => console.error("La sauvegarde des activités a échoué", e));
    setIsAddingActivity(false);
  };

  const handleDeleteActivity = (activityId: number) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette activité ? Cette action est irréversible et la supprimera aussi du calendrier.")) {
      const newActivities = activities.filter(act => act.id !== activityId);
      setActivities(newActivities);
      api.saveActivities(newActivities).catch(e => console.error("La sauvegarde des activités a échoué", e));
      
      setScheduledActivities(prevScheduled => {
        const newScheduled = { ...prevScheduled };
        Object.keys(newScheduled).forEach(date => {
            newScheduled[date] = newScheduled[date].filter(act => act.id !== activityId);
            if (newScheduled[date].length === 0) {
              delete newScheduled[date];
            }
        });
        api.saveScheduledActivities(newScheduled).catch(e => console.error("La sauvegarde du calendrier a échoué", e));
        return newScheduled;
      });
    }
  };
  
  const handleReorderActivities = useCallback((draggedActivity: Activity, targetActivity: Activity) => {
    if (draggedActivity.id === targetActivity.id || draggedActivity.category !== targetActivity.category) {
      return;
    }

    setActivities(prevActivities => {
      const newActivities = [...prevActivities];
      const draggedIndex = newActivities.findIndex(a => a.id === draggedActivity.id);
      const targetIndex = newActivities.findIndex(a => a.id === targetActivity.id);

      if (draggedIndex === -1 || targetIndex === -1) {
        return prevActivities;
      }

      const [movedActivity] = newActivities.splice(draggedIndex, 1);
      const newTargetIndex = newActivities.findIndex(a => a.id === targetActivity.id);
      newActivities.splice(newTargetIndex, 0, movedActivity);

      api.saveActivities(newActivities).catch(e => {
        console.error("La sauvegarde de la réorganisation des activités a échoué", e);
        // On pourrait ici annuler la modification
      });

      return newActivities;
    });
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
        <div className="flex flex-col items-center gap-4">
            <svg className="animate-spin h-10 w-10 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="text-lg font-semibold text-gray-700">Chargement du calendrier...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      <ActivitySidebar 
        activities={activities}
        onEditActivity={setEditingActivity}
        onAddActivity={() => setIsAddingActivity(true)}
        onDeleteActivity={handleDeleteActivity}
        onReorderActivities={handleReorderActivities}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="p-6 border-b bg-gray-100/80 backdrop-blur-sm">
            <div className="flex justify-between items-center flex-wrap gap-4">
              <h1 className="text-4xl font-bold text-gray-800">Planificateur d'Activités</h1>
              <UserSelector
                users={USERS}
                currentUser={currentUser}
                onSelectUser={setCurrentUser}
              />
            </div>
        </header>
        <main className="flex-1 p-6 overflow-auto">
          <Calendar 
            scheduledActivities={scheduledActivities}
            onDropActivity={(date, activity) => handleDropActivity(date, activity, currentUser)}
            onRemoveActivity={handleRemoveActivity}
            onViewActivity={setViewingActivity}
          />
        </main>
      </div>

      {isAddingActivity && (
        <AddActivityModal
            onClose={() => setIsAddingActivity(false)}
            onSave={handleAddActivity}
        />
      )}
      {editingActivity && (
        <EditActivityModal
          activity={editingActivity}
          onClose={() => setEditingActivity(null)}
          onSave={handleUpdateActivity}
        />
      )}
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