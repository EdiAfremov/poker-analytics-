import firebase from "firebase";

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
