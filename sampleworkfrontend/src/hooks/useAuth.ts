import { useState, useEffect } from 'react';
import { getToken } from '../utils/utils';

const useAuth = (): boolean => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = getToken;
        setIsAuthenticated(!!token);
    }, []);

    return isAuthenticated;
};

export { useAuth };