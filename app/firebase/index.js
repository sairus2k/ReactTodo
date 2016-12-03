import firebase from 'firebase';
try {
  const config = {
    apiKey: "AIzaSyAEn-kFmN9-HMvf_yWhuvY7mgwjbKPsyR8",
    authDomain: "todo-app-b52e1.firebaseapp.com",
    databaseURL: "https://todo-app-b52e1.firebaseio.com",
    storageBucket: "todo-app-b52e1.appspot.com",
    messagingSenderId: "191369667301"
  };
  firebase.initializeApp(config);
} catch (e) {
  console.log(e);
}
export const firebaseRef = firebase.database().ref();
export default firebase;
