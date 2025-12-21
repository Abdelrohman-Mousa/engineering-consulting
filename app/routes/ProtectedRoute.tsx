import { Navigate } from "react-router";
import { useAuth } from "src/context/AuthContext";

export default function ProtectedRoute({ children }) {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/signin" replace />;
    }

    return children;
}
