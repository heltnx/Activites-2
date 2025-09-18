import React from 'react';
import { USERS } from '../constants';
import { UserName } from '../types';

interface UserSelectorProps {
  users: typeof USERS;
  currentUser: UserName;
  onSelectUser: (user: UserName) => void;
}

const UserSelector: React.FC<UserSelectorProps> = ({ users, currentUser, onSelectUser }) => {
  return (
    <div className="flex items-center gap-4 bg-white p-2 rounded-full shadow-sm">
      <span className="text-sm font-semibold text-gray-600 ml-2">Utilisateur:</span>
      <div className="flex items-center gap-2">
        {(Object.keys(users) as UserName[]).map(userName => {
          const user = users[userName];
          const isSelected = currentUser === userName;
          return (
            <button
              key={user.name}
              onClick={() => onSelectUser(userName)}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isSelected
                  ? `${user.color} ${user.textColor} shadow`
                  : `bg-gray-200 text-gray-700 hover:bg-gray-300`
              } ${user.ringColor}`}
              aria-pressed={isSelected}
            >
              {user.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default UserSelector;
