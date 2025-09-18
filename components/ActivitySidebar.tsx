import React, { useState } from 'react';
import { ACTIVITY_CATEGORIES } from '../constants';
import { Activity } from '../types';
import { ActivityIcon, PencilIcon, TrashIcon, PlusIcon } from './icons';

interface ActivityItemProps {
  activity: Activity;
  onEdit: (activity: Activity) => void;
  onDelete: (id: number) => void;
  onReorder: (dragged: Activity, target: Activity) => void;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ activity, onEdit, onDelete, onReorder }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const categoryStyle = ACTIVITY_CATEGORIES[activity.category];

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('application/json', JSON.stringify(activity));
    e.dataTransfer.setData('drag-source', 'sidebar-activity');
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete(activity.id);
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.getData('drag-source') === 'sidebar-activity') {
      const draggedActivityRaw = e.dataTransfer.getData('application/json');
      if (draggedActivityRaw) {
        const draggedActivity = JSON.parse(draggedActivityRaw);
        if (draggedActivity.id !== activity.id && draggedActivity.category === activity.category) {
            setIsDragOver(true);
        }
      }
    }
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);

    if (e.dataTransfer.getData('drag-source') === 'sidebar-activity') {
      try {
        const draggedActivity = JSON.parse(e.dataTransfer.getData('application/json'));
        if (draggedActivity.id !== activity.id) {
            onReorder(draggedActivity, activity);
        }
      } catch (err) {
        console.error("Erreur lors de l'analyse des données de l'activité glissée", err);
      }
    }
  };

  const handleDragEnd = () => {
    setIsDragOver(false);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onDragEnd={handleDragEnd}
      className={`relative group p-3 mb-2 rounded-lg cursor-grab active:cursor-grabbing shadow-sm transition-all duration-200 ease-in-out hover:shadow-md hover:scale-105 border-l-4 ${categoryStyle.color} ${categoryStyle.borderColor}`}
    >
      {isDragOver && <div className="absolute top-[-2px] left-0 right-0 h-1 bg-indigo-500" aria-hidden="true" />}
      <div className="flex items-start">
        <ActivityIcon name={activity.icon} alt={activity.name} className={`w-8 h-8 mr-4 mt-1 flex-shrink-0 ${categoryStyle.textColor}`} />
        <div className="flex-1">
          <p className={`font-semibold ${categoryStyle.textColor}`}>{activity.name}</p>
          <p className="text-sm text-slate-700">{activity.description}</p>
        </div>
        <div className="flex flex-col items-center ml-2 opacity-0 group-hover:opacity-100 focus-within:opacity-100">
            <button 
              onClick={() => onEdit(activity)} 
              className="p-1.5 rounded-full text-slate-500 hover:bg-black/10 transition-colors"
              aria-label="Modifier l'activité"
            >
              <PencilIcon className="w-4 h-4" />
            </button>
            <button 
              onClick={handleDelete}
              className="p-1.5 rounded-full text-rose-500 hover:bg-rose-500/10 transition-colors"
              aria-label="Supprimer l'activité"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
        </div>
      </div>
    </div>
  );
};

interface ActivitySidebarProps {
    activities: Activity[];
    onEditActivity: (activity: Activity) => void;
    onAddActivity: () => void;
    onDeleteActivity: (id: number) => void;
    onReorderActivities: (dragged: Activity, target: Activity) => void;
}

const ActivitySidebar: React.FC<ActivitySidebarProps> = ({ activities, onEditActivity, onAddActivity, onDeleteActivity, onReorderActivities }) => {
  const groupedActivities = Object.keys(ACTIVITY_CATEGORIES).map(catKey => {
      const category = catKey as keyof typeof ACTIVITY_CATEGORIES;
      return {
          categoryInfo: ACTIVITY_CATEGORIES[category],
          activities: activities.filter(act => act.category === category)
      }
  });

  return (
    <aside className="w-96 bg-white h-full p-4 overflow-y-auto shadow-lg flex flex-col">
      <div className="flex justify-between items-center mb-4 sticky top-0 bg-white py-2 z-10 border-b">
        <h2 className="text-2xl font-bold text-gray-700">Liste des Activités</h2>
        <button
          onClick={onAddActivity}
          className="p-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          aria-label="Ajouter une nouvelle activité"
        >
          <PlusIcon className="w-5 h-5" />
        </button>
      </div>
      <div className="flex-1">
        {groupedActivities.map(({ categoryInfo, activities }) => (
          <div key={categoryInfo.name} className="mb-6">
            <h3 className={`text-lg font-semibold mb-3 ${categoryInfo.textColor}`}>{categoryInfo.name}</h3>
            <div>
              {activities.map(activity => (
                <ActivityItem 
                    key={activity.id} 
                    activity={activity} 
                    onEdit={onEditActivity}
                    onDelete={onDeleteActivity} 
                    onReorder={onReorderActivities}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default ActivitySidebar;