import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyDdBDQ9cHKhcVoB29Br67KWkZtV_jvGyJg',
  authDomain: 'movies-app-ab94a.firebaseapp.com',
  projectId: 'movies-app-ab94a',
  storageBucket: 'movies-app-ab94a.appspot.com',
  messagingSenderId: '801228927177',
  appId: '1:801228927177:web:3d4275200f4e749e449d18',
  measurementId: 'G-FT05BRBKXJ',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
