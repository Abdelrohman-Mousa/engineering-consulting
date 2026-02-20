import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../config/firebase.js";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        await setDoc(
            doc(db, "users", user.uid),
            {
                email: user.email,
                name: user.displayName || user.email.split("@")[0],
                imageUrl: user.photoURL,
                role: "user",
                createdAt: serverTimestamp(),   // لو جديد
                lastLogin: serverTimestamp(),   // 👈 أهم حاجة
            },
            { merge: true }
        );

        return user;
    } catch (err) {
        throw err;
    }
};