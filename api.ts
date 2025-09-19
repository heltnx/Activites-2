import {
  collection,
  getDocs,
  query,
  orderBy,
  writeBatch,
  doc,
  addDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  where,
  setDoc,
} from 'firebase/firestore';
import { Activity, ScheduledActivities, ScheduledActivity, UserName } from './types';
import { INITIAL_ACTIVITIES } from './constants';
import { db } from './firebase';

const seedInitialData = async () => {
  console.log("Remplissage de la base de données Firebase avec les activités initiales...");
  const batch = writeBatch(db);
  INITIAL_ACTIVITIES.forEach(activity => {
    // Ne stockez pas l'ID dans le corps du document, car il s'agit de la clé du document.
    const { id, ...data } = activity;
    const docRef = doc(db, 'activities', id);
    batch.set(docRef, data);
  });
  await batch.commit();
  console.log("Remplissage terminé.");
};

export const api = {
  async getActivities(): Promise<Activity[]> {
    const activitiesCollection = collection(db, 'activities');
    const q = query(activitiesCollection, orderBy('order'));
    let snapshot = await getDocs(q);

    if (snapshot.empty) {
      console.log("Base de données vide, remplissage des données initiales...");
      await seedInitialData();
      snapshot = await getDocs(q);
    }

    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Activity));
  },

  async addActivity(activityData: Omit<Activity, 'id' | 'order'>): Promise<Activity> {
      const now = Date.now();
      const dataToSave = { ...activityData, order: now };
      const docRef = await addDoc(collection(db, 'activities'), dataToSave);
      return { id: docRef.id, ...dataToSave };
  },

  async updateActivity(activity: Activity): Promise<void> {
    const { id, ...activityData } = activity;
    const docRef = doc(db, 'activities', id);
    // Firestore `updateDoc` ne fonctionne qu'avec des objets simples, donc nous convertissons.
    await updateDoc(docRef, { ...activityData });
  },

  async deleteActivity(activityId: string): Promise<void> {
    const batch = writeBatch(db);
    
    // 1. Trouver et supprimer toutes les instances planifiées de cette activité
    const scheduledActivitiesCollection = collection(db, 'scheduled_activities');
    const q = query(scheduledActivitiesCollection, where('activity_id', '==', activityId));
    const scheduledSnapshot = await getDocs(q);
    scheduledSnapshot.forEach(doc => {
      batch.delete(doc.ref);
    });

    // 2. Supprimer l'activité principale
    const activityDocRef = doc(db, 'activities', activityId);
    batch.delete(activityDocRef);

    await batch.commit();
  },
  
  async reorderActivities(draggedActivity: Activity, targetActivity: Activity): Promise<void> {
      // NOTE: Cette logique n'est actuellement pas utilisée.
  },

  async getScheduledActivities(): Promise<ScheduledActivities> {
    const snapshot = await getDocs(collection(db, 'scheduled_activities'));
    const schedule: ScheduledActivities = {};
    snapshot.docs.forEach(doc => {
      const item = { id: doc.id, ...doc.data() } as ScheduledActivity;
      if (!schedule[item.date]) {
        schedule[item.date] = [];
      }
      schedule[item.date].push(item);
    });
    return schedule;
  },

  async addScheduledActivity(date: string, activity: Activity, user: UserName): Promise<ScheduledActivity> {
      const { id: activity_id, ...activityData } = activity;

      const newScheduledData = {
          ...activityData,
          activity_id,
          scheduledBy: user,
          date,
      };
      
      const docRef = await addDoc(collection(db, 'scheduled_activities'), newScheduledData);

      return {
          id: docRef.id,
          ...newScheduledData,
      };
  },
  
  async removeScheduledActivity(scheduledActivityId: string): Promise<void> {
      const docRef = doc(db, 'scheduled_activities', scheduledActivityId);
      await deleteDoc(docRef);
  }
};