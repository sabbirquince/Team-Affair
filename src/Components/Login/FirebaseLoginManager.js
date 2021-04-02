import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3QUjfYmlfZ18YnQE2XrUanhX6w5MvkPE",
  authDomain: "team-affiar.firebaseapp.com",
  projectId: "team-affiar",
  storageBucket: "team-affiar.appspot.com",
  messagingSenderId: "809032126854",
  appId: "1:809032126854:web:2d48339f96dcef3faf1c07",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

//////////// EMAIL & PASSWORD AUTHENTICATION /////////////
export const createUserWithEmailAndPassword = (name, email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      let user = userCredential.user;
      let newUser = { ...user };
      newUser.displayName = name;
      newUser.message = true;
      return newUser;
    })
    .catch((error) => {
      const errorData = { ...error };
      errorData.message = false;
      return errorData;
    });
};

export const signInWithEmailAndPassword = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      let user = userCredential.user;
      let newUser = { ...user };
      newUser.message = true;
      return newUser;
    })
    .catch((error) => {
      const errorData = { ...error };
      errorData.message = false;
      return errorData;
    });
};

export const signInWithGoogle = () => {
  var googleProvider = new firebase.auth.GoogleAuthProvider();

  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
      let user = result.user;
      let newUser = { ...user };
      newUser.message = true;
      return newUser;
    })
    .catch((error) => {
      const errorData = { ...error };
      errorData.message = false;
      return errorData;
    });
};

export const signInWithFacebook = () => {
  var fbProvider = new firebase.auth.FacebookAuthProvider();

  return firebase
    .auth()
    .signInWithPopup(fbProvider)
    .then((result) => {
      let user = result.user;
      let newUser = { ...user };
      newUser.message = true;
      return newUser;
    })
    .catch((error) => {
      const errorData = { ...error };
      errorData.message = false;
      return errorData;
    });
};
