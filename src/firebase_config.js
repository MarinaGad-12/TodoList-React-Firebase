// import firebase from 'firebase';
// const firebaseConfig = {
//   apiKey: 'AIzaSyADsAVXR_nihaD45O8h4bHg4GmF9QZtnMk',
//   authDomain: 'todo-list-app-2ea65.firebaseapp.com',
//   projectId: 'todo-list-app-2ea65',
//   storageBucket: 'todo-list-app-2ea65.appspot.com',
//   messagingSenderId: '366934275577',
//   appId: '1:366934275577:web:6d164811a50bf248fbf928',
// };

// firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore();

// export { db };

import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyADsAVXR_nihaD45O8h4bHg4GmF9QZtnMk',
  authDomain: 'todo-list-app-2ea65.firebaseapp.com',
  projectId: 'todo-list-app-2ea65',
  storageBucket: 'todo-list-app-2ea65.appspot.com',
  messagingSenderId: '366934275577',
  appId: '1:366934275577:web:6d164811a50bf248fbf928',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
