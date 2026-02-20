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
    updateDoc,
    serverTimestamp,
} from "firebase/firestore";

import { auth } from "../config/firebase";
import { db } from "../config/firebase";

const DEFAULT_AVATAR = "/assets/icons/user-avatar.svg";

// Signup
export const signup = async (email, password) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);

    const userRef = doc(db, "users", res.user.uid);
    const snap = await getDoc(userRef);
    const username = res.user.email.split("@")[0];

    if (!snap.exists()) {
        await setDoc(userRef, {
            email: res.user.email,
            name: username,
            imageUrl: `https://ui-avatars.com/api/?name=${encodeURIComponent(username)}`,
            role: "user",
            createdAt: serverTimestamp(),
            lastLogin: serverTimestamp(), // 👈 مهم جداً
        });
    }

    return res.user;
};

// Login
export const login = async (email, password) => {
    const res = await signInWithEmailAndPassword(auth, email, password);

    const userRef = doc(db, "users", res.user.uid);

    await updateDoc(userRef, {
        lastLogin: serverTimestamp(), // 👈 كل مرة يعمل login يتحدث
    });

    return res.user;
};

// Logout
export const logout = () => signOut(auth);

// Auth Listener
export const authListener = (callback) =>
    onAuthStateChanged(auth, callback);