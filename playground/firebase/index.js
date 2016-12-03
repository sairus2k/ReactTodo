import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAEn-kFmN9-HMvf_yWhuvY7mgwjbKPsyR8",
  authDomain: "todo-app-b52e1.firebaseapp.com",
  databaseURL: "https://todo-app-b52e1.firebaseio.com",
  storageBucket: "todo-app-b52e1.appspot.com",
  messagingSenderId: "191369667301"
};
firebase.initializeApp(config);
const firebaseRef = firebase.database().ref();
firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'sairus',
    age: 25
  }
});

const todosRef = firebaseRef.child('todos');
todosRef.on('child_added', snapshot => {
  console.log('New todo added', snapshot.key, snapshot.val());
});
todosRef.push({text: 'Feed the dog'});
todosRef.push({text: 'Go to walk'});
