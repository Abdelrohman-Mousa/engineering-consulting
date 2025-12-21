import { Navigate } from "react-router";
import { useAuth } from "src/context/AuthContext";

type Props = {
    children: React.ReactNode;
};

export default function AdminRoute({ children }: Props) {
    const { user, role } = useAuth();

    // لو مش مسجل دخول
    if (!user) {
        return <Navigate to="/signin" replace />;
    }

    // لو مسجل دخول لكن مش أدمن
    if (role !== "admin") {
        return <Navigate to="/" replace />;
    }

    // لو أدمن → يقدر يدخل
    return <>{children}</>;
}
