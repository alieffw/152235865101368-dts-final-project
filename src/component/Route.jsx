import React from 'react';
import { auth } from "../config/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';

const Route = ({ children, loginOnly=true }) => {
    const [user] = useAuthState(auth)

    if (user && !loginOnly) {
        return <Navigate to ={'/'} />;
    }
    
    if (!user && loginOnly) {
        return <Navigate to ={'/sign-in'} />;
    }

    return children;
}

export default Route;