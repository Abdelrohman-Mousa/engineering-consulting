import { collection, getDocs, Timestamp } from "firebase/firestore";
import { db } from "../config/firebase.js";

export const getDashboardStats = async () => {
    const now = new Date();

    const startOfCurrentMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const endOfLastMonth = new Date(now.getFullYear(), now.getMonth(), 0);

    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(now.getDate() - 30);

    // ================= USERS =================
    const usersSnap = await getDocs(collection(db, "users"));
    const totalUsers = usersSnap.size;

    let usersCurrentMonth = 0;
    let usersLastMonth = 0;

    let activeCurrentMonth = 0;
    let activeLastMonth = 0;
    let activeTotal = 0;

    usersSnap.forEach(doc => {
        const data = doc.data();

        // ====== Created At ======
        if (data.createdAt) {
            const createdAt = data.createdAt.toDate();

            if (createdAt >= startOfCurrentMonth) {
                usersCurrentMonth++;
            }

            if (
                createdAt >= startOfLastMonth &&
                createdAt <= endOfLastMonth
            ) {
                usersLastMonth++;
            }
        }

        // ====== Last Login ======
        if (data.lastLogin) {
            const lastLogin = data.lastLogin.toDate();

            if (lastLogin >= thirtyDaysAgo) {
                activeTotal++;
            }

            if (lastLogin >= startOfCurrentMonth) {
                activeCurrentMonth++;
            }

            if (
                lastLogin >= startOfLastMonth &&
                lastLogin <= endOfLastMonth
            ) {
                activeLastMonth++;
            }
        }
    });

    // ================= CONSULTATIONS =================
    const consultationsSnap = await getDocs(collection(db, "consultations"));
    const totalConsultations = consultationsSnap.size;

    let consultationsCurrentMonth = 0;
    let consultationsLastMonth = 0;

    consultationsSnap.forEach(doc => {
        const data = doc.data();
        if (!data.createdAt) return;

        const createdAt = data.createdAt.toDate();

        if (createdAt >= startOfCurrentMonth) {
            consultationsCurrentMonth++;
        }

        if (
            createdAt >= startOfLastMonth &&
            createdAt <= endOfLastMonth
        ) {
            consultationsLastMonth++;
        }
    });

    return {
        totalUsers,
        usersJoined: {
            currentMonth: usersCurrentMonth,
            lastMonth: usersLastMonth,
        },
        totalConsultations,
        requestConsulting: {
            currentMonth: consultationsCurrentMonth,
            lastMonth: consultationsLastMonth,
        },
        activeUsers: {
            total: activeTotal,
            currentMonth: activeCurrentMonth,
            lastMonth: activeLastMonth,
        }
    };
};
