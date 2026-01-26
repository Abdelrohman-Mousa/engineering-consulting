import {
    collection,
    addDoc,
    serverTimestamp,
} from "firebase/firestore";
import { db } from "../config/firebase";

export const addMessage = async (data: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    company: string;
    message: string;
}) => {
    try {
        await addDoc(collection(db, "messages"), {
            ...data,
            status: "new",
            createdAt: serverTimestamp(),
        });

        return { success: true };
    } catch (error) {
        console.error("Error adding message:", error);
        return { success: false };
    }
};
