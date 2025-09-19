import { Activity } from './types';

export const ACTIVITY_CATEGORIES = {
  PHYSICAL: { name: 'Activité Physique', color: 'bg-green-200', textColor: 'text-green-800', borderColor: 'border-green-300' },
  DIGITAL: { name: 'Numérique', color: 'bg-blue-200', textColor: 'text-blue-800', borderColor: 'border-blue-300' },
  GAMES: { name: 'Jeux & Cérébral', color: 'bg-yellow-200', textColor: 'text-yellow-800', borderColor: 'border-yellow-300' },
  OUTINGS: { name: 'Sorties & Courses', color: 'bg-amber-200', textColor: 'text-amber-800', borderColor: 'border-amber-300' },
  PERSONAL: { name: 'Personnel', color: 'bg-pink-200', textColor: 'text-pink-800', borderColor: 'border-pink-300' },
  APPOINTMENTS: { name: 'Rendez-vous', color: 'bg-purple-200', textColor: 'text-purple-800', borderColor: 'border-purple-300' },
} as const;

export const USERS = {
  'Michelle': { name: 'Michelle', color: 'bg-rose-400', textColor: 'text-rose-900', ringColor: 'ring-rose-400', borderColor: 'border-rose-500' },
  'Robert': { name: 'Robert', color: 'bg-sky-400', textColor: 'text-sky-900', ringColor: 'ring-sky-400', borderColor: 'border-sky-500' },
  'Hélène': { name: 'Hélène', color: 'bg-yellow-400', textColor: 'text-yellow-900', ringColor: 'ring-yellow-400', borderColor: 'border-yellow-500' },
} as const;


// FIX: Changed numeric `id`s to strings and added the missing `order` property to conform to the Activity type.
export const INITIAL_ACTIVITIES: Activity[] = [
  // PHYSICAL
  { id: '1', name: 'Marche légère (parc, corniche, intérieur)', category: 'PHYSICAL', description: 'Maintient la souplesse et active la circulation.', icon: 'Walk', order: 0 },
  { id: '2', name: 'Marche avec bâtons', category: 'PHYSICAL', description: 'Fait travailler 80% des muscles du corps.', icon: 'NordicWalking', order: 1 },
  { id: '3', name: 'Gym douce / Yoga sur chaise ou debout', category: 'PHYSICAL', description: 'Améliore l\'équilibre, la force et la sérénité.', icon: 'Yoga', order: 2 },
  { id: '4', name: 'Tai-chi', category: 'PHYSICAL', description: 'Coordination et relaxation par des mouvements lents.', icon: 'TaiChi', order: 3 },
  { id: '5', name: 'Étirements, Relaxation, Respiration', category: 'PHYSICAL', description: 'Détend les muscles et calme l\'esprit.', icon: 'Breathe', order: 4 },
  { id: '6', name: 'Plage', category: 'PHYSICAL', description: 'Air marin vivifiant et marche douce sur le sable.', icon: 'Beach', order: 5 },
  { id: '7', name: 'Vélo', category: 'PHYSICAL', description: 'Renforce le cardio et les jambes en plein air.', icon: 'Bike', order: 6 },
  { id: '24', name: 'Tapis de marche', category: 'PHYSICAL', description: 'Entretien cardiovasculaire à la maison, sans impact.', icon: 'Treadmill', order: 7 },

  // DIGITAL
  { id: '8', name: 'Découverte du numérique (tablette)', category: 'DIGITAL', description: 'Stimule la curiosité et maintient le lien social.', icon: 'Tablet', order: 8 },
  { id: '9', name: 'Classement de photos numériques', category: 'DIGITAL', description: 'Organise les souvenirs et exerce la mémoire.', icon: 'Photos', order: 9 },
  { id: '10', name: 'Autres applications', category: 'DIGITAL', description: 'Jeux, actualités, météo... Le monde au bout des doigts.', icon: 'Apps', order: 10 },

  // GAMES
  { id: '11', name: 'Jeux de société (Scrabble, Boggle, Dominos, Cartes)', category: 'GAMES', description: 'Convivialité, stratégie et gymnastique de l\'esprit.', icon: 'BoardGames', order: 11 },
  { id: '12', name: 'Quiz de culture générale ou de mémoire', category: 'GAMES', description: 'Améliore la mémoire et les connaissances générales.', icon: 'Quiz', order: 12 },
  { id: '13', name: 'Mots fléchés ou Sudoku', category: 'GAMES', description: 'Excellent pour la concentration et la logique.', icon: 'Puzzle', order: 13 },
  { id: '14', name: 'Échecs / Billard', category: 'GAMES', description: 'Stratégie, anticipation et précision des gestes.', icon: 'Chess', order: 14 },
  { id: '15', name: 'Pétanque', category: 'GAMES', description: 'Adresse, concentration et convivialité en plein air.', icon: 'Petanque', order: 15 },

  // OUTINGS
  { id: '16', name: 'Visites culturelles (musées, expos, spectacle)', category: 'OUTINGS', description: 'Éveille la curiosité et enrichit l\'esprit.', icon: 'Museum', order: 16 },
  { id: '17', name: 'Courses', category: 'OUTINGS', description: 'Maintient l\'autonomie et la planification.', icon: 'Cart', order: 17 },
  { id: '18', name: 'Concours échecs / petits-enfants (Lisa, Léo)', category: 'OUTINGS', description: 'Partage intergénérationnel et stimulation mentale.', icon: 'Family', order: 18 },
  
  // PERSONAL
  { id: '19', name: 'Photographie', category: 'PERSONAL', description: 'Exprime la créativité et capture de beaux moments.', icon: 'Camera', order: 19 },
  { id: '20', name: 'Regarder de vieux albums photos', category: 'PERSONAL', description: 'Ravive les souvenirs et renforce les liens affectifs.', icon: 'Album', order: 20 },
  
  // APPOINTMENTS
  { id: '21', name: 'Rendez-vous médicaux', category: 'APPOINTMENTS', description: 'Pour le suivi de la santé et le bien-être.', icon: 'Medical', order: 21 },
  { id: '22', name: 'Club Seniors', category: 'APPOINTMENTS', description: 'Maintient le lien social et les activités de groupe.', icon: 'Group', order: 22 },
  { id: '23', name: 'Autres rendez-vous', category: 'APPOINTMENTS', description: 'Planification des évènements importants.', icon: 'Calendar', order: 23 },
];

export const DAYS_OF_WEEK = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
export const MONTH_NAMES = [
  'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
];