import React from 'react';
import { ScheduledActivity } from '../types';
import { ActivityIcon } from './icons';
import { ACTIVITY_CATEGORIES, USERS } from '../constants';

interface ActivityDetailModalProps {
  activity: ScheduledActivity;
  onClose: () => void;
}

const ActivityDetailModal: React.FC<ActivityDetailModalProps> = ({ activity, onClose }) => {
  const categoryStyle = ACTIVITY_CATEGORIES[activity.category];
  const userStyle = USERS[activity.scheduledBy];

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="activity-detail-title"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-xl w-full max-w-md"
        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
      >
        <div className={`p-6 rounded-t-lg ${categoryStyle.color}`}>
            <div className="flex items-start gap-4">
                <ActivityIcon name={activity.icon} className={`w-16 h-16 p-2 rounded-lg bg-black/10 ${categoryStyle.textColor}`} alt={activity.name} />
                <div>
                    <h2 id="activity-detail-title" className={`text-2xl font-bold ${categoryStyle.textColor}`}>{activity.name}</h2>
                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${categoryStyle.color} ${categoryStyle.textColor} border ${categoryStyle.borderColor} shadow-sm`}>
                        {categoryStyle.name}
                    </span>
                </div>
            </div>
        </div>
        <div className="p-6 space-y-4">
            <div>
              <h3 className="font-semibold text-gray-500 text-sm">Description</h3>
              <p className="text-gray-800">{activity.description}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-500 text-sm">Planifié par</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className={`w-3 h-3 rounded-full ${userStyle.color}`}></span>
                <span className={`font-semibold ${userStyle.textColor}`}>{activity.scheduledBy}</span>
              </div>
            </div>
        </div>
        <div className="p-4 border-t flex justify-end bg-gray-50 rounded-b-lg">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetailModal;
