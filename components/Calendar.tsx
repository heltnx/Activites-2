import React, { useState, useMemo } from 'react';
import { Activity, ScheduledActivities, ScheduledActivity } from '../types';
import { DAYS_OF_WEEK, MONTH_NAMES, ACTIVITY_CATEGORIES, USERS } from '../constants';
import { ChevronLeftIcon, ChevronRightIcon, TrashIcon, ActivityIcon } from './icons';

interface CalendarProps {
  scheduledActivities: ScheduledActivities;
  onDropActivity: (date: string, activity: Activity) => void;
  onRemoveActivity: (date: string, instanceId: string) => void;
  onViewActivity: (activity: ScheduledActivity) => void;
}

const Calendar: React.FC<CalendarProps> = ({ scheduledActivities, onDropActivity, onRemoveActivity, onViewActivity }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const changeMonth = (offset: number) => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + offset);
      return newDate;
    });
  };

  const calendarGrid = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Adjust for Monday start (Date.getDay() is 0 for Sunday)
    const startOffset = (firstDayOfMonth === 0) ? 6 : firstDayOfMonth - 1;

    const days = [];
    for (let i = 0; i < startOffset; i++) {
      days.push({ key: `empty-start-${i}`, type: 'empty' });
    }
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({ key: `${year}-${month}-${day}`, type: 'day', day, month, year });
    }
    const remaining = 42 - days.length; // 6 weeks grid
     for (let i = 0; i < remaining; i++) {
      days.push({ key: `empty-end-${i}`, type: 'empty' });
    }

    return days;
  }, [currentDate]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{MONTH_NAMES[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
        <div className="flex space-x-2">
          <button onClick={() => changeMonth(-1)} className="p-2 rounded-full hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
            <ChevronLeftIcon />
          </button>
          <button onClick={() => changeMonth(1)} className="p-2 rounded-full hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
            <ChevronRightIcon />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {DAYS_OF_WEEK.map(day => (
          <div key={day} className="text-center font-semibold text-gray-600 py-2">{day}</div>
        ))}
        {calendarGrid.map(dayInfo => 
            dayInfo.type === 'empty' ? 
            <div key={dayInfo.key} className="border rounded-md bg-gray-50"></div> : 
            <CalendarDay 
                key={dayInfo.key}
                day={dayInfo.day!}
                month={dayInfo.month!}
                year={dayInfo.year!}
                activities={scheduledActivities[`${dayInfo.year!}-${String(dayInfo.month! + 1).padStart(2, '0')}-${String(dayInfo.day!).padStart(2, '0')}`] || []}
                onDropActivity={onDropActivity}
                onRemoveActivity={onRemoveActivity}
                onViewActivity={onViewActivity}
            />
        )}
      </div>
    </div>
  );
};

interface CalendarDayProps {
    day: number;
    month: number;
    year: number;
    activities: ScheduledActivity[];
    onDropActivity: (date: string, activity: Activity) => void;
    onRemoveActivity: (date: string, instanceId: string) => void;
    onViewActivity: (activity: ScheduledActivity) => void;
}

const CalendarDay: React.FC<CalendarDayProps> = ({ day, month, year, activities, onDropActivity, onRemoveActivity, onViewActivity }) => {
    const [isOver, setIsOver] = useState(false);
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    
    const today = new Date();
    const isToday = day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
    
    const todayStart = new Date();
    todayStart.setHours(0,0,0,0);
    const isPast = new Date(year, month, day) < todayStart;

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (!isPast) {
            setIsOver(true);
        }
    };

    const handleDragLeave = () => setIsOver(false);

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (isPast) return;
        
        setIsOver(false);
        try {
            const activity = JSON.parse(e.dataTransfer.getData('application/json'));
            onDropActivity(dateStr, activity);
        } catch(error) {
            console.error("Failed to parse activity data:", error);
        }
    };
    
    return (
        <div 
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border rounded-md p-2 h-40 flex flex-col transition-colors duration-200 ${
                isOver ? 'bg-blue-100' : isPast ? 'bg-gray-100' : 'bg-white'
            } ${isPast ? 'cursor-not-allowed' : ''}`}
        >
            <span className={`font-semibold self-start ${isToday ? 'bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center' : 'text-gray-700'}`}>{day}</span>
            <div className="mt-1 flex-1 overflow-y-auto space-y-1 pr-1">
                {activities.map(activity => (
                    <ScheduledActivityItem 
                        key={activity.instanceId}
                        activity={activity}
                        onRemove={(e) => {
                          e.stopPropagation();
                          onRemoveActivity(dateStr, activity.instanceId)
                        }}
                        onView={() => onViewActivity(activity)}
                    />
                ))}
            </div>
        </div>
    );
}

interface ScheduledActivityItemProps {
  activity: ScheduledActivity;
  onRemove: (e: React.MouseEvent) => void;
  onView: () => void;
}

const ScheduledActivityItem: React.FC<ScheduledActivityItemProps> = ({ activity, onRemove, onView }) => {
  const categoryStyle = ACTIVITY_CATEGORIES[activity.category];
  const userStyle = USERS[activity.scheduledBy];

  return (
    <div 
      className={`group relative text-xs rounded flex items-stretch overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer`}
      title={`Ajouté par ${activity.scheduledBy}. Cliquez pour voir les détails.`}
      onClick={onView}
    >
        <div className={`flex-shrink-0 w-8 flex items-center justify-center ${userStyle.color}`}>
            <ActivityIcon name={activity.icon} alt={activity.name} className={`w-5 h-5 ${userStyle.textColor}`} />
        </div>
        <div className={`flex-1 p-1.5 truncate ${categoryStyle.color} ${categoryStyle.textColor}`}>
            <span className="font-semibold">{activity.name}</span>
        </div>
      <button 
        onClick={onRemove}
        className="absolute right-0.5 top-0.5 p-0.5 rounded-full bg-black bg-opacity-0 hover:bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Supprimer l'activité"
      >
        <TrashIcon className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}


export default Calendar;