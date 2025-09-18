import { Activity, ScheduledActivities } from './types';
import { INITIAL_ACTIVITIES } from './constants';

const SCHEDULED_ACTIVITIES_KEY = 'planned-activities-schedule';
const ACTIVITIES_KEY = 'planned-activities-list';
const API_LATENCY = 300; // ms, simulation de la latence réseau

// --- MOCK API ---
// Ce fichier simule une API backend en utilisant le localStorage du navigateur.
// Pour une véritable synchronisation entre appareils, il faudrait remplacer
// les appels à localStorage par des requêtes HTTP (ex: fetch) vers un
// vrai serveur avec une base de données. Cette structure prépare l'application
// à une telle évolution.

export const api = {
  async getActivities(): Promise<Activity[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        try {
          const storedActivitiesJSON = localStorage.getItem(ACTIVITIES_KEY);
          if (storedActivitiesJSON) {
            const storedActivities = JSON.parse(storedActivitiesJSON);
            // Ensure what we loaded is a valid array
            if (Array.isArray(storedActivities)) {
              resolve(storedActivities);
              return;
            }
          }
          // If nothing is stored, or if it's not an array, initialize.
          localStorage.setItem(ACTIVITIES_KEY, JSON.stringify(INITIAL_ACTIVITIES));
          resolve(INITIAL_ACTIVITIES);
        } catch (error) {
          console.error("Erreur API (mock): Impossible de charger ou parser les activités. Réinitialisation.", error);
          // If parsing failed, the data is corrupt. Overwrite it.
          try {
            localStorage.setItem(ACTIVITIES_KEY, JSON.stringify(INITIAL_ACTIVITIES));
          } catch (e) {
            console.error("Erreur API (mock): Impossible de sauvegarder les activités initiales après une erreur.", e);
          }
          resolve(INITIAL_ACTIVITIES);
        }
      }, API_LATENCY);
    });
  },

  async saveActivities(activities: Activity[]): Promise<void> {
     return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          localStorage.setItem(ACTIVITIES_KEY, JSON.stringify(activities));
          resolve();
        } catch (error) {
          console.error("Erreur API (mock): Impossible de sauvegarder les activités.", error);
          reject(error);
        }
      }, API_LATENCY / 2);
    });
  },

  async getScheduledActivities(): Promise<ScheduledActivities> {
    return new Promise((resolve) => {
      setTimeout(() => {
        try {
          const savedJSON = localStorage.getItem(SCHEDULED_ACTIVITIES_KEY);
          if (savedJSON) {
            const saved = JSON.parse(savedJSON);
            // Check if it's a non-null, non-array object
            if (typeof saved === 'object' && saved !== null && !Array.isArray(saved)) {
              resolve(saved);
              return;
            }
          }
          // If nothing stored or invalid format, return empty object.
          resolve({});
        } catch (error) {
          console.error("Erreur API (mock): Impossible de charger le calendrier. Réinitialisation.", error);
           // If parsing fails, data might be corrupt. Clear it.
          try {
            localStorage.removeItem(SCHEDULED_ACTIVITIES_KEY);
          } catch (e) {
            console.error("Erreur API (mock): Impossible de supprimer le calendrier corrompu.", e);
          }
          resolve({});
        }
      }, API_LATENCY);
    });
  },

  async saveScheduledActivities(schedule: ScheduledActivities): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          localStorage.setItem(SCHEDULED_ACTIVITIES_KEY, JSON.stringify(schedule));
          resolve();
        } catch (error) {
          console.error("Erreur API (mock): Impossible de sauvegarder le calendrier.", error);
          reject(error);
        }
      }, API_LATENCY / 2);
    });
  },
};
