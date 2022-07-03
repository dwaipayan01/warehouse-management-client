import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, Navigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
const RequireAuth = ({ children }) => {
    const location = useLocation();

    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return <p><Loading></Loading></p>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;