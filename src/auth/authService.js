import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";

import {
    doc,
    setDoc,
    getDoc,
    serverTimestamp,
} from "firebase/firestore";

import { auth } from "../config/firebase";
import { db } from "../config/firebase";

const DEFAULT_AVATAR ="/assets/icons/user-avatar.svg";
// Signup
export const signup = async (email, password) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);

    const userRef = doc(db, "users", res.user.uid);
    const snap = await getDoc(userRef);

    // نحفظه مرة واحدة بس
    if (!snap.exists()) {
        await setDoc(userRef, {
            email: res.user.email,
            name: "New User",
            imageUrl: `https://ui-avatars.com/api/?name=${encodeURIComponent(res.user.email)}`,
            role: "user",
            createdAt: serverTimestamp(),
        });
    }

    return res.user;
};

// Login
export const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

// Logout
export const logout = () => signOut(auth);

// Auth Listener
export const authListener = (callback) =>
    onAuthStateChanged(auth, callback);

