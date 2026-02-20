import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../config/firebase.js";

export const getUserGrowthPerDay = async () => {
    const q = query(
        collection(db, "users"),
        orderBy("createdAt", "asc")
    );

    const snapshot = await getDocs(q);

    const map: Record<string, number> = {};

    snapshot.docs.forEach(doc => {
        const data = doc.data();
        if (!data.createdAt) return;

        const date = data.createdAt.toDate();
        const key = date.toISOString().split("T")[0]; // YYYY-MM-DD

        map[key] = (map[key] || 0) + 1;
    });

    return Object.entries(map).map(([key, count]) => ({
        day: new Date(key).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
        }),
        count,
    }));
};

//consulting
export const getConsultGrowthPerDay = async () => {
    const q = query(
        collection(db, "consultations"),
        orderBy("createdAt", "asc")
    );

    const snapshot = await getDocs(q);

    const map: Record<string, number> = {};

    snapshot.docs.forEach(doc => {
        const data = doc.data();
        if (!data.createdAt) return;

        const date = data.createdAt.toDate();
        const key = date.toISOString().split("T")[0]; // YYYY-MM-DD

        map[key] = (map[key] || 0) + 1;
    });

    return Object.entries(map)
        .map(([key, count]) => ({
            day: new Date(key).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
            }),
            count,
        }))
        .sort((a, b) => new Date(a.day).getTime() - new Date(b.day).getTime());
};