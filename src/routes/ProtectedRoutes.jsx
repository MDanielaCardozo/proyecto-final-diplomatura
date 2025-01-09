import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
    const userAdmin = JSON.parse(localStorage.getItem('userKey')) || null;

    if (!userAdmin) {
        return <Navigate to="/auth/login" />;
    } else {
        return children;
    }
};

export default ProtectedRoutes;