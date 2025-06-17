import React, { use } from 'react';

import { Navigate, useLocation } from 'react-router';
import Loading from '../Components/Loading';
import { AuthContext } from '../assets/AuthProvider/AuthProvider';


const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user , loading} = use(AuthContext)

    if(loading){
        return <Loading></Loading>
    }

    if (!user || !user.email) {
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;