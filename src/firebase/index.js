import app from "firebase/app";
import "firebase/auth";

export const { auth } = app;

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const providers = {
  google: "GoogleAuthProvider",
  facebook: "FacebookAuthProvider",
};

export const initialize = () => app.initializeApp(config);

export const signIn = async (provider = "google") => {
  try {
    const result = await auth().signInWithPopup(
      new auth[providers[provider]]()
    );
    // This gives you a Google Access Token. You can use it to access the Google API.
    const token = result?.credential?.accessToken;
    // The signed-in user info.
    const user = result?.user;
    const additionalUserInfo = result?.additionalUserInfo;
    
    return { ...user, ...additionalUserInfo };
  } catch (error) {
    throw new Error(error);
  }
};

export const signOut = async () => {
  try {
    const signOut = await auth.signOut();
    return signOut;
  } catch (error) {
    return error;
  }
};

export const getLoggedInUser = () => {
  return auth().currentUser;
};
