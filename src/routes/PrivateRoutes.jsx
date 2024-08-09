import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location= useLocation();
    if (loading) {
        <h1>
            loading
        </h1>
    }
    if (user) {
        return children;
    }
    return (
        <Navigate to={`/login`} state={{from:location}}>

        </Navigate>
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoute;