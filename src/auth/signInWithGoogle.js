import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../config/firebase.js";
import {doc, serverTimestamp, setDoc} from "firebase/firestore";

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        // احفظ المستخدم في Firestore لو جديد
        await setDoc(doc(db, "users", user.uid), {
            email: user.email,
            name: user.displayName,
            imageUrl: user.photoURL,
            role: "user", // العملاء الافتراضيين
            createdAt: serverTimestamp(),
        }, { merge: true });

        return user;
    } catch (err) {
        throw err;
    }
};
