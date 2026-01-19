import {
    collection,
    getDocs,
    query,
    limit,
    startAfter,
    orderBy,
} from "firebase/firestore";
import {db} from "../config/firebase";

export const getUsers = async ({pageSize = 10, lastDoc = null,}: {pageSize?: number;lastDoc?: any;}) => {
    try {
        const usersRef = collection(db, "users");

        const q = lastDoc
            ? query(
                usersRef,
                orderBy("createdAt", "desc"),
                startAfter(lastDoc),
                limit(pageSize)
            )
            : query(
                usersRef,
                orderBy("createdAt", "desc"),
                limit(pageSize)
            );

        const snapshot = await getDocs(q);

        const users = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return {
            users,
            lastDoc: snapshot.docs[snapshot.docs.length - 1] || null,
            hasMore: snapshot.docs.length === pageSize,
        };
    } catch (error) {
        console.error("Error fetching users:", error);
        return {
            users: [],
            lastDoc: null,
            hasMore: false,
        };
    }
};
