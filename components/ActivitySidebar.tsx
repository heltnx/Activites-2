import React from 'react';
import { ACTIVITY_CATEGORIES } from '../constants';
import { Activity } from '../types';
import { ActivityIcon } from './icons';

interface ActivityItemProps {
  activity: Activity;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ activity }) => {
  const categoryStyle = ACTIVITY_CATEGORIES[activity.category];

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('activity-id', activity.id);
    e.dataTransfer.setData('drag-source', 'sidebar-activity');
    e.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className={`relative group p-3 mb-2 rounded-lg cursor-grab active:cursor-grabbing shadow-sm transition-all duration-200 ease-in-out hover:shadow-md hover:scale-105 border-l-4 ${categoryStyle.color} ${categoryStyle.borderColor}`}
    >
      <div className="flex items-start">
        <ActivityIcon name={activity.icon} alt={activity.name} className={`w-8 h-8 mr-4 mt-1 flex-shrink-0 ${categoryStyle.textColor}`} />
        <div className="flex-1">
          <p className={`font-semibold ${categoryStyle.textColor}`}>{activity.name}</p>
          <p className="text-sm text-slate-700">{activity.description}</p>
        </div>
      </div>
    </div>
  );
};

interface ActivitySidebarProps {
    activities: Activity[];
}

const ActivitySidebar: React.FC<ActivitySidebarProps> = ({ activities }) => {
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