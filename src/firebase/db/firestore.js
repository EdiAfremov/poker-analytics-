import firebase from "firebase";
import { v4 as uuid } from "uuid";
export const initializeDb = () => firebase.firestore();
const db = initializeDb();

export async function createNewUser({
  displayName,
  email,
  uid,
  providerId,
  photoURL,
}) {
  const collection = db.collection("users");

  try {
    const docRef = await collection.add({
      name: displayName,
      email,
      userId: uid,
      providerId,
      photoURL,
    });
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}
export async function createNewGame({
  userId,
  buyIn,
  cashedOut,
  date,
  profit,
}) {
  const collection = db.collection("games");

  try {
    const docRef = await collection.add({
      buyIn,
      cashedOut,
      profit,
      date,
      userId,
      gameId: uuid(),
    });
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

export async function getGamesByUserId(userId) {
  const collection = db.collection("games");
  const query = collection.where("userId", "==", userId);

  try {
    const data = await query.get();
    if (!data.empty) {
      const games = data.docs.map((doc) => ({ ...doc.data() }));
      return games;
    } else {
      return [];
    }
  } catch (error) {
    console.log("Error getting documents: ", error);
  }
}
export async function listenForChanges(userId, cb) {
  const collection = db.collection("games");
  const query = collection.where("userId", "==", userId);

  query.onSnapshot((querySnapshot) => {
    if (!querySnapshot.empty) {
      const games = querySnapshot.docs.map((doc) => ({ ...doc.data() }));
      return cb(games);
    } else {
      return cb([]);
    }
  });
}

export async function getUserInfo(userId) {
  const collection = db.collection("users");
  const query = collection.where("userId", "==", userId);

  try {
    const querySnapshot = await query.get();
    if (!querySnapshot.empty) {
      const user = querySnapshot.docs[0].data();
      return user;
    } else {
      return false;
    }
  } catch (error) {
    console.log("Error getting documents: ", error);
  }
}
