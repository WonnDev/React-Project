import { createUserWithEmailAndPassword } from "firebase/auth";
import { firestore, auth } from "./firebase";
import { doc, setDoc } from "firebase/firestore";

export const createUser = async (email, password, name) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Create and Login Successed!");
      localStorage.setItem("email", email);
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
    })
    .catch((error) => console.log(error));
};
