import { Outlet, Navigate } from "react-router";
import { useAuth } from "src/context/AuthContext";

export default function DashboardLayout() {
    const { user, role, loading } = useAuth();

    // منع Flash أثناء تحميل البيانات
    if (loading) return <div>Loading...</div>;

    // مش مسجل دخول
    if (!user) return <Navigate to="/signin" replace />;

    // مسجل دخول لكن مش أدمن
    if (role !== "admin") return <Navigate to="/" replace />;

    // أدمن
    return <Outlet />;
}
