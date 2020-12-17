import app from "firebase/app";
import "firebase/auth";
import * as DB from "./db/firestore";

export const { auth } = app;

const providers = {
  google: "GoogleAuthProvider",
  facebook: "FacebookAuthProvider",
};

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

    if (additionalUserInfo.isNewUser) {
      DB.createNewUser({ ...user, ...additionalUserInfo });
    }
    
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
