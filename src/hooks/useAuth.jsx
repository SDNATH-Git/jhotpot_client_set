import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
// import { AuthContext } from '../contexts/AuthContext/AuthContext';

const useAuth = () => {
    const authInfo = use(AuthContext);
    return authInfo;
};

export default useAuth;


