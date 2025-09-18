import React from 'react';

export const ChevronLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

export const ChevronRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export const TrashIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

export const PencilIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
    <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
  </svg>
);

export const PlusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
  </svg>
);

// --- Activity Icons ---
const WalkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M14.5 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-2.85 2.15.5 2.5 2.85-1.12-1.2 5.92 2.2 1.05-1.5 3L13 18.5l-1.65-3.3-3.35 2.2V14l3-3-1.5-3.45 3-.9Z"/></svg>
);
const NordicWalkingIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M18.25 2a.75.75 0 0 0-1.5 0v16.19l-3.22-3.22a.75.75 0 0 0-1.06 1.06l4.5 4.5a.75.75 0 0 0 1.06 0l4.5-4.5a.75.75 0 1 0-1.06-1.06L18.25 18.19V2ZM8.5 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM5.65 8.15l.5 2.5 2.85-1.12-1.2 5.92 2.2 1.05-1.5 3L7 18.5l-1.65-3.3-3.35 2.2V14l3-3-1.5-3.45 3-.9Z"/></svg>
);
const YogaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M4 2a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1Zm4.33 2.5A2.5 2.5 0 0 0 5.5 6.33V10h1V7.5a1.5 1.5 0 0 1 3 0V10h1V7.5a2.5 2.5 0 0 0-2.17-2.5ZM13.5 6a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM12 8.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm-1.41 6.02-3.1-3.1a.75.75 0 0 0-1.06 1.06l3.47 3.47a.75.75 0 0 0 1.12-.09l4.59-5.41a.75.75 0 0 0-1.16-.98L10.59 14.52Z"/></svg>
);
const TaiChiIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path fillRule="evenodd" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-1.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15ZM12 12a3 3 0 1 1 0-6v1.5a1.5 1.5 0 0 0 0 3V12Zm0 0a3 3 0 1 0 0 6V16.5a1.5 1.5 0 0 1 0-3V12Z" clipRule="evenodd"/></svg>
);
const BreatheIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/></svg>
);
const BeachIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 14.25c-3.1 0-5.5-1.63-5.5-3.63S8.9 7 12 7s5.5 1.63 5.5 3.63-2.4 3.62-5.5 3.62ZM12 8a2.5 2.5 0 0 0-2.5 2.63c0 1.25 1.12 2.12 2.5 2.12s2.5-.87 2.5-2.12A2.5 2.5 0 0 0 12 8Zm-8.02 9.01a.75.75 0 0 0-1.23-.8l-2.5 1.5a.75.75 0 0 0 .58 1.36l2.5-1.5a.75.75 0 0 0 .65-.56Zm17.27-.8a.75.75 0 0 0-1.23.8l2.5 1.5a.75.75 0 0 0 1.23-.8l-2.5-1.5Z"/><path d="m19.14 7.64-2.5-2.5a.75.75 0 1 0-1.06 1.06l2.5 2.5a.75.75 0 1 0 1.06-1.06ZM3.79 6.21a.75.75 0 0 0 1.06 1.06l2.5-2.5a.75.75 0 0 0-1.06-1.06l-2.5 2.5Z"/><path d="M12 2a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2.75A.75.75 0 0 1 12 2Z"/></svg>
);
const BikeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M6 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-1.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM18 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-1.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"/><path d="m16.03 8.97-3-2.5a.75.75 0 0 0-1.06 0l-5 4a.75.75 0 0 0 .53 1.28H9v.55l-2.4 1.2a.75.75 0 0 0 .6 1.3l.9-.45.9 1.8a.75.75 0 0 0 1.34-.67l-.5-1 1.91-1.43H14a3.5 3.5 0 0 0 3.2-2.03.75.75 0 0 0-1.18-.8Z"/></svg>
);
const TreadmillIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="m19.5 9.5-2-1.5-2 1.5-2.5-4-3.5 2 .5 1-2 1.5-2-3-1.5 1 .5 3.5 1.5 1-1.5 3h18l-1-4-2.5 1Z"/><path d="M3.25 19.5a.75.75 0 0 0 0 1.5h17.5a.75.75 0 0 0 0-1.5H3.25Z"/></svg>
);
const TabletIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M6.75 2A2.25 2.25 0 0 0 4.5 4.25v15.5A2.25 2.25 0 0 0 6.75 22h10.5A2.25 2.25 0 0 0 19.5 19.75V4.25A2.25 2.25 0 0 0 17.25 2H6.75ZM6 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 .75.75v15.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V4.25Zm6 14.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/></svg>
);
const PhotosIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M4.25 2A2.25 2.25 0 0 0 2 4.25v12.5A2.25 2.25 0 0 0 4.25 19h2.55a.75.75 0 0 1 .6-.3l3.3-4.4a.75.75 0 0 1 1.2 0l2.35 3.13a.75.75 0 0 1 0 .94l-2.4 3.2a.75.75 0 0 1-.6.3H4.25a.75.75 0 0 1-.75-.75V4.25c0-.41.34-.75.75-.75h12.5c.41 0 .75.34.75.75v5.5a.75.75 0 0 1-1.5 0V4.25H4.25Z"/><path d="M20 12.5a.75.75 0 0 0-1.5 0v3.75a.75.75 0 0 0 1.5 0V12.5Zm1.25 4.5a2.25 2.25 0 0 1-4.5 0v-3.75a2.25 2.25 0 0 1 4.5 0v3.75Z"/></svg>
);
const AppsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M4.75 3.5a1.25 1.25 0 0 0-1.25 1.25v3.5a1.25 1.25 0 0 0 1.25 1.25h3.5a1.25 1.25 0 0 0 1.25-1.25v-3.5A1.25 1.25 0 0 0 8.25 3.5h-3.5ZM5 4.75h3.25a.25.25 0 0 1 .25.25v3.5a.25.25 0 0 1-.25.25H5a.25.25 0 0 1-.25-.25v-3.5A.25.25 0 0 1 5 4.75Zm5.5 0a1.25 1.25 0 0 0-1.25 1.25v3.5a1.25 1.25 0 0 0 1.25 1.25h3.5A1.25 1.25 0 0 0 15 8.25v-3.5A1.25 1.25 0 0 0 13.75 3.5h-3.5Zm.25 1.25h3.5a.25.25 0 0 1 .25.25v3.5a.25.25 0 0 1-.25.25h-3.5a.25.25 0 0 1-.25-.25v-3.5a.25.25 0 0 1 .25-.25Zm5.25-.25a1.25 1.25 0 0 0-1.25 1.25v3.5a1.25 1.25 0 0 0 1.25 1.25h3.5A1.25 1.25 0 0 0 20.5 8.25v-3.5A1.25 1.25 0 0 0 19.25 3.5h-3.5Zm.25 1.25h3.5a.25.25 0 0 1 .25.25v3.5a.25.25 0 0 1-.25.25h-3.5a.25.25 0 0 1-.25-.25v-3.5a.25.25 0 0 1 .25-.25ZM4.75 10.5a1.25 1.25 0 0 0-1.25 1.25v3.5a1.25 1.25 0 0 0 1.25 1.25h3.5A1.25 1.25 0 0 0 9.5 15.25v-3.5A1.25 1.25 0 0 0 8.25 10.5h-3.5Zm.25 1.25h3.5a.25.25 0 0 1 .25.25v3.5a.25.25 0 0 1-.25.25h-3.5a.25.25 0 0 1-.25-.25v-3.5a.25.25 0 0 1 .25-.25Zm5.25-.25a1.25 1.25 0 0 0-1.25 1.25v3.5a1.25 1.25 0 0 0 1.25 1.25h3.5a1.25 1.25 0 0 0 1.25-1.25v-3.5A1.25 1.25 0 0 0 13.75 10.5h-3.5Zm.25 1.25h3.5a.25.25 0 0 1 .25.25v3.5a.25.25 0 0 1-.25.25h-3.5a.25.25 0 0 1-.25-.25v-3.5a.25.25 0 0 1 .25-.25Zm5.25-.25a1.25 1.25 0 0 0-1.25 1.25v3.5a1.25 1.25 0 0 0 1.25 1.25h3.5a1.25 1.25 0 0 0 1.25-1.25v-3.5a1.25 1.25 0 0 0-1.25-1.25h-3.5Zm.25 1.25h3.5a.25.25 0 0 1 .25.25v3.5a.25.25 0 0 1-.25.25h-3.5a.25.25 0 0 1-.25-.25v-3.5a.25.25 0 0 1 .25-.25Z"/></svg>
);
const BoardGamesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12.75 2.25a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-3ZM6.168 5.436a.75.75 0 1 0-1.06 1.06l2.122 2.121a.75.75 0 0 0 1.06-1.06L6.168 5.436ZM2.25 12.75a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Zm3.918 4.432a.75.75 0 0 0-1.06 1.06l2.12 2.122a.75.75 0 0 0 1.06-1.06l-2.12-2.122ZM12.75 21.75a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-.75-.75Zm4.932-3.918a.75.75 0 0 0-1.06-1.06l-2.122 2.12a.75.75 0 0 0 1.06 1.06l2.122-2.12ZM21.75 12a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-.75-.75Zm-3.918-6.682a.75.75 0 0 0-1.06-1.06L14.65 6.37a.75.75 0 0 0 1.06 1.06l2.122-2.12Z"/><path d="M16 11a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-5 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"/></svg>
);
const QuizIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 20.25a.75.75 0 0 1 0 1.5.75.75 0 0 1 0-1.5Z"/><path fillRule="evenodd" d="M12 2.25c-5.12 0-9.25 3.912-9.25 8.75 0 2.235 1.02 4.43 2.768 6.092.422.41.803.953.803 1.536v.041c0 .738.44 1.393 1.13 1.768.94.513 2.053.813 3.232.813s2.292-.3 3.232-.813a1.94 1.94 0 0 0 1.13-1.768v-.04c0-.584.38-1.127.804-1.537C19.48 15.43 20.5 13.235 20.5 11c0-4.838-4.13-8.75-9.25-8.75Zm-5.75 8.75a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0Z" clipRule="evenodd"/></svg>
);
const PuzzleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M7.5 3.75a2.25 2.25 0 0 0-2.25 2.25v2.25h3v-1.5h1.5v-3H7.5Z"/><path d="M3.75 9.75v4.5h1.5v3h3v-1.5h1.5v-3h-3v-1.5h-3Z"/><path d="M9.75 16.5h4.5v1.5h3v-3h-1.5v-1.5h-3v3h-3Z"/><path d="M15 8.25V9.75h3v3h1.5V7.5h-3A2.25 2.25 0 0 0 15 8.25Z"/><path d="M3 8.25A2.25 2.25 0 0 1 5.25 6H6V4.5a.75.75 0 0 1 .75-.75H9V3a.75.75 0 0 1 .75-.75h3A.75.75 0 0 1 13.5 3v.75h1.5a.75.75 0 0 1 .75.75V6h.75A2.25 2.25 0 0 1 18 8.25V9h1.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75H18v.75a2.25 2.25 0 0 1-2.25 2.25H15v1.5a.75.75 0 0 1-.75.75H12a.75.75 0 0 1-.75-.75V18h-1.5a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75v-1.5H4.5a2.25 2.25 0 0 1-2.25-2.25V15H1.5a.75.75 0 0 1-.75-.75v-3A.75.75 0 0 1 1.5 9H3V8.25Z"/></svg>
);
const ChessIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M5.25 22.5a.75.75 0 0 0 0-1.5H4.5a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 0-1.5 0v1.5A2.25 2.25 0 0 0 4.5 22.5h.75Zm13.5 0a.75.75 0 0 1 0-1.5h.75a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 1 1.5 0v1.5a2.25 2.25 0 0 1-2.25 2.25h-.75Z"/><path d="M12 2c2.4 0 4.5 1.5 4.5 4v.5a.5.5 0 0 1-.5.5h-2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 0-.5-.5H8a.5.5 0 0 1-.5-.5V6c0-2.5 2.1-4 4.5-4ZM8.5 11h7a2.5 2.5 0 0 1 2.5 2.5v1a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-1A2.5 2.5 0 0 1 8.5 11Zm-3 5.5a.75.75 0 0 0 1.5 0v-1h10v1a.75.75 0 0 0 1.5 0v-1a2.5 2.5 0 0 0-2.5-2.5h-8A2.5 2.5 0 0 0 5.5 15.5v1Z"/></svg>
);
const PetanqueIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-7.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15Z"/><path d="M12 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/><path d="M3 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/></svg>
);
const MuseumIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M5.25 6.38v8.24a.75.75 0 0 0 1.5 0V7.2l7.5-3 7.5 3v7.42a.75.75 0 0 0 1.5 0V6.38a.75.75 0 0 0-.4-.68L12.4 2.1a.75.75 0 0 0-.8 0l-6.4 3.6a.75.75 0 0 0-.4.68Z"/><path d="M4.5 16.5a.75.75 0 0 0-1.5 0v3.75c0 .41.34.75.75.75h16.5a.75.75 0 0 0 .75-.75V16.5a.75.75 0 0 0-1.5 0v3h-2.25v-4.5a.75.75 0 0 0-1.5 0v4.5h-2.25v-4.5a.75.75 0 0 0-1.5 0v4.5H9.75v-4.5a.75.75 0 0 0-1.5 0v4.5H6v-3Z"/></svg>
);
const CartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="m11.12 6.5-1.5 4h8.38l-1.5-4h-5.38Z"/><path d="M10.13 4.25a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 .75.75v1.25h1.75a.75.75 0 0 1 .71.53l2.5 7a.75.75 0 0 1-.7 1.02H9.7a.75.75 0 0 1-.7-1.02l2.5-7a.75.75 0 0 1 .71-.53h-.08v-1.25Z"/><path d="M7 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0-1.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm9.5 1.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0-1.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z"/><path d="M4.25 4A2.25 2.25 0 0 0 2 6.25v.25a.75.75 0 0 0 1.5 0V6.25a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 0 0-1.5H4.25Z"/><path d="M8.25 18a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z"/></svg>
);
const FamilyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M10.5 7.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-2.25 1a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"/><path d="M13.5 10.75a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0Zm3.25 1a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"/><path d="M6.25 12.81a.75.75 0 0 0-1.4.62 4.002 4.002 0 0 0 7.89 0 .75.75 0 0 0-1.4-.62 2.5 2.5 0 0 1-5.09 0Z"/><path d="M12.75 16.81a.75.75 0 0 0-1.4.62 4 4 0 0 0 7.89 0 .75.75 0 0 0-1.4-.62 2.5 2.5 0 0 1-5.09 0Z"/></svg>
);
const CameraIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M7.5 6.75a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0v-.5Z"/><path d="M9 2A2.25 2.25 0 0 0 6.75 4.25v1.5a.75.75 0 0 0 1.5 0v-1.5c0-.41.34-.75.75-.75h6c.41 0 .75.34.75.75v1.5a.75.75 0 0 0 1.5 0v-1.5A2.25 2.25 0 0 0 15 2H9Z"/><path d="M3.75 6A2.25 2.25 0 0 0 1.5 8.25v9.5A2.25 2.25 0 0 0 3.75 20h16.5A2.25 2.25 0 0 0 22.5 17.75v-9.5A2.25 2.25 0 0 0 20.25 6H3.75ZM12 16.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm0-1.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg>
);
const AlbumIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M3 3.75A2.25 2.25 0 0 1 5.25 1.5h13.5A2.25 2.25 0 0 1 21 3.75v16.5A2.25 2.25 0 0 1 18.75 22.5H5.25A2.25 2.25 0 0 1 3 20.25V3.75ZM5.25 3a.75.75 0 0 0-.75.75v16.5a.75.75 0 0 0 .75.75h13.5a.75.75 0 0 0 .75-.75V3.75a.75.75 0 0 0-.75-.75H5.25Z"/><path d="M7.5 14.25a.75.75 0 0 0-1.5 0v2.25c0 .41.34.75.75.75h3a.75.75 0 0 0 0-1.5H7.5v-1.5Z"/><path d="M16.5 7.5a.75.75 0 0 0 1.5 0V5.25a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0 0 1.5h2.25v1.5Z"/></svg>
);
const MedicalIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M9.75 2.75a.75.75 0 0 0-1.5 0V6h-3.25a.75.75 0 0 0 0 1.5H8.25v3.25a.75.75 0 0 0 1.5 0V7.5h3.25a.75.75 0 0 0 0-1.5H9.75V2.75Z"/><path d="M3.75 3A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75Zm16.5 1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h16.5Z"/></svg>
);
const GroupIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12.75 2.25a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0v-2.5Z"/><path d="M5.5 5.25a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0v-2.5Z"/><path d="M18.5 5.25a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0v-2.5Z"/><path d="M12 11.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-2.25 1a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"/><path d="M5.25 15.81a.75.75 0 0 0-1.4.62 4.002 4.002 0 0 0 7.89 0 .75.75 0 0 0-1.4-.62 2.5 2.5 0 0 1-5.09 0Z"/><path d="M15.75 11.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-2.25 1a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"/><path d="M12 15.81a.75.75 0 0 0-1.4.62 4 4 0 0 0 7.89 0 .75.75 0 0 0-1.4-.62 2.5 2.5 0 0 1-5.09 0Z"/></svg>
);
const CalendarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M3.75 3A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75Z"/><path d="M9 12.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9Z"/></svg>
);


export const iconMap: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  Walk: WalkIcon,
  NordicWalking: NordicWalkingIcon,
  Yoga: YogaIcon,
  TaiChi: TaiChiIcon,
  Breathe: BreatheIcon,
  Beach: BeachIcon,
  Bike: BikeIcon,
  Treadmill: TreadmillIcon,
  Tablet: TabletIcon,
  Photos: PhotosIcon,
  Apps: AppsIcon,
  BoardGames: BoardGamesIcon,
  Quiz: QuizIcon,
  Puzzle: PuzzleIcon,
  Chess: ChessIcon,
  Petanque: PetanqueIcon,
  Museum: MuseumIcon,
  Cart: CartIcon,
  Family: FamilyIcon,
  Camera: CameraIcon,
  Album: AlbumIcon,
  Medical: MedicalIcon,
  Group: GroupIcon,
  Calendar: CalendarIcon,
};

export const ActivityIcon: React.FC<{ name: string; className?: string, alt?: string }> = ({ name, className, alt }) => {
  if (name && name.startsWith('data:image')) {
    return <img src={name} alt={alt || "Icône d'activité"} className={className} />;
  }

  const IconComponent = iconMap[name];
  return IconComponent ? <IconComponent className={className} /> : null;
};