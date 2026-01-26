import {
    collection,
    getDocs,
    query,
    orderBy,
    limit,
    startAfter,
} from "firebase/firestore";
import { db } from "../config/firebase";

export const getMessages = async ({pageSize = 10, lastDoc = null,}: {
          pageSize?: number;
          lastDoc?: any;
}) => {
    try {
        const messagesRef = collection(db, "messages");

        const q = lastDoc
            ? query(
                messagesRef,
                orderBy("createdAt", "desc"),
                startAfter(lastDoc),
                limit(pageSize)
            )
            : query(
                messagesRef,
                orderBy("createdAt", "desc"),
                limit(pageSize)
            );

        const snapshot = await getDocs(q);

        const messages = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return {
            messages,
            lastDoc: snapshot.docs[snapshot.docs.length - 1] || null,
            hasMore: snapshot.docs.length === pageSize,
        };
    } catch (error) {
        console.error("Error fetching messages:", error);
        return {
            messages: [],
            lastDoc: null,
            hasMore: false,
        };
    }
};
