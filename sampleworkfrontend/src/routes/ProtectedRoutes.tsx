import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';

const ProtectedRoutes = () => {
    let isAuth = useAuth();
    return (
        isAuth ? <Outlet /> : <Navigate to='/sign-in' />
    )
}

export { ProtectedRoutes };