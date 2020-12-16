import firebase from "firebase";

export const initializeDb = () => firebase.firestore();
const db = initializeDb();

export function saveUser() {
  db.collection("users")
    .add({
      first: "edi",
      last: "sfsafs",
      born: 1815,
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
}
