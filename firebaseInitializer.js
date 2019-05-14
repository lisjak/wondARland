import { config } from './firebase-config';
import * as firebase from 'firebase/app';
// import * as firebase from 'firebase';

import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp(config);

export const f = firebase;
// export const database = firebase.database();
// export const auth = firebase.auth();
