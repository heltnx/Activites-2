import React, { useState } from 'react';
import { Activity } from '../types';
import { iconMap, ActivityIcon } from './icons';
import { ACTIVITY_CATEGORIES } from '../constants';

interface EditActivityModalProps {
  activity: Activity;
  onClose: () => void;
  onSave: (activity: Activity) => void;
}

const EditActivityModal: React.FC<EditActivityModalProps> = ({ activity, onClose, onSave }) => {
  const [formData, setFormData] = useState<Activity>(activity);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleIconChange = (iconName: string) => {
    setFormData(prev => ({ ...prev, icon: iconName }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
       if (file.size > 1024 * 1024) { // 1MB limit
        alert("L'image est trop grande. Veuillez choisir un fichier de moins de 1 Mo.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, icon: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };
  
  const iconNames = Object.keys(iconMap);

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="edit-activity-title"
    >
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col">
        <div className="p-6 border-b">
          <h2 id="edit-activity-title" className="text-2xl font-bold text-gray-800">Modifier l'activité</h2>
        </div>
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nom de l'activité
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Catégorie
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-900 text-gray-200"
                required
              >
                {Object.entries(ACTIVITY_CATEGORIES).map(([key, { name }]) => (
                  <option key={key} value={key} className="bg-gray-800 text-gray-200">{name}</option>
                ))}
              </select>
            </div>
             <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Icône actuelle
              </label>
              <div className="flex items-center gap-4 p-2 bg-gray-50 rounded-md border">
                <ActivityIcon name={formData.icon} className="w-10 h-10 text-gray-600 rounded object-cover" alt="Aperçu de l'icône actuelle" />
                <p className="text-sm text-gray-500">Sélectionnez une icône dans la liste ci-dessous ou téléchargez une nouvelle image.</p>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Choisir une icône
              </label>
              <div className="grid grid-cols-8 sm:grid-cols-10 md:grid-cols-12 gap-2 p-2 bg-gray-50 rounded-md border max-h-48 overflow-y-auto">
                {iconNames.map(iconName => (
                  <button
                    key={iconName}
                    type="button"
                    onClick={() => handleIconChange(iconName)}
                    className={`flex items-center justify-center p-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                      formData.icon === iconName
                        ? 'bg-indigo-500 text-white'
                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }`}
                    aria-label={`Choisir l'icône ${iconName}`}
                    aria-pressed={formData.icon === iconName}
                  >
                    <ActivityIcon name={iconName} className="w-6 h-6" />
                  </button>
                ))}
              </div>
            </div>
             <div>
                <label htmlFor="icon-upload" className="block text-sm font-medium text-gray-700 mb-1">
                    Ou téléchargez une icône
                </label>
                <input
                    id="icon-upload"
                    type="file"
                    accept="image/png, image/jpeg, image/gif, image/svg+xml"
                    onChange={handleFileChange}
                    className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                    aria-describedby="file_input_help"
                />
                <p className="mt-1 text-xs text-gray-500" id="file_input_help">PNG, JPG, GIF ou SVG (MAX. 1Mo).</p>
            </div>
          </div>
          <div className="p-6 border-t flex justify-end gap-3 bg-gray-50 rounded-b-lg">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-md hover:bg-gray-300 transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors"
            >
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditActivityModal;