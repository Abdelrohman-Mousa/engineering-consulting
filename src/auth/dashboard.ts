import { collection, getDocs, query, where, Timestamp } from "firebase/firestore";
import { db } from "../config/firebase.js";

export const getDashboardStats = async () => {
    const now = new Date();
    const startOfCurrentMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const endOfLastMonth = new Date(now.getFullYear(), now.getMonth(), 0);

    // Users
    const usersSnap = await getDocs(collection(db, "users"));
    const totalUsers = usersSnap.size;

    const usersCurrentMonth = await getDocs(
        query(
            collection(db, "users"),
            where("createdAt", ">=", Timestamp.fromDate(startOfCurrentMonth))
        )
    );

    const usersLastMonth = await getDocs(
        query(
            collection(db, "users"),
            where("createdAt", ">=", Timestamp.fromDate(startOfLastMonth)),
            where("createdAt", "<=", Timestamp.fromDate(endOfLastMonth))
        )
    );

    // Consultations
    const consultationsSnap = await getDocs(collection(db, "consultations"));
    const totalConsultations = consultationsSnap.size;

    const consultationsCurrentMonth = await getDocs(
        query(
            collection(db, "consultations"),
            where("createdAt", ">=", Timestamp.fromDate(startOfCurrentMonth))
        )
    );

    const consultationsLastMonth = await getDocs(
        query(
            collection(db, "consultations"),
            where("createdAt", ">=", Timestamp.fromDate(startOfLastMonth)),
            where("createdAt", "<=", Timestamp.fromDate(endOfLastMonth))
        )
    );

    return {
        totalUsers,
        usersJoined: {
            currentMonth: usersCurrentMonth.size,
            lastMonth: usersLastMonth.size,
        },
        totalConsultations,
        requestConsulting: {
            currentMonth: consultationsCurrentMonth.size,
            lastMonth: consultationsLastMonth.size,
        },
    };
};

