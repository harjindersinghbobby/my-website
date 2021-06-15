import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBSmms9h42ATSHU3kSH2UcLCc7rzlKhywU',
  authDomain: 'my-website-fee43.firebaseapp.com',
  projectId: 'my-website-fee43',
  storageBucket: 'my-website-fee43.appspot.com',
  messagingSenderId: '265610079468',
  appId: '1:265610079468:web:3bf1cfbd575f5a8c4e09c9',
  measurementId: 'G-W3MXQ3WCVW',
  databaseURL: 'https://my-website-fee43-default-rtdb.firebaseio.com',
};

const app = firebase.initializeApp(config);
// let ref = firebase.database().ref('/');
// ref.on('value', (snapshot) => {
//   const state = snapshot.val();
// });
export default firebase;
