import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { firestore, auth } from "./firebase";
import { doc, setDoc } from "firebase/firestore";

export const createUser = async (email, password, name) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Created and Login Success!");
      // ...
      const userRef = doc(firestore, "users", userCredential.user.uid);
      setDoc(
        userRef,
        {
          displayName: name,
          email: userCredential.user.email,
          created: { ...userCredential.user.metadata },
        },
        { merge: false }
      );
      console.log("addDoc Success!");
    })
    .catch((error) => console.log(error));
};
