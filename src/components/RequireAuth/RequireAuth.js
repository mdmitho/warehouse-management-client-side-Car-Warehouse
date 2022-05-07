import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init'
const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation()
    if(loading){
        return <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600 mt-30" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    }
    
    if(user){
        return children;
    } else{
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
};

export default RequireAuth;