import { SignIn } from '../pages/SignInPage';
import { SignUp } from '../pages/SignUpPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProtectedRoutes } from './ProtectedRoutes';
import { ProductDetail } from '../pages/Product';
import { LazyProductListPage } from '../pages/ProductList';

interface RouteConfig {
    path: string;
    component: React.ComponentType;
    children?: RouteConfig[];
}

const UnAuthRoutesConfig: RouteConfig[] = [
    { path: '/sign-in', component: SignIn },
    { path: '/sign-up', component: SignUp },
]

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                {UnAuthRoutesConfig.map((route, index) => {
                    return (
                        <Route key={index} path={route.path} element={<route.component />} />
                    );
                })}

                <Route element={<ProtectedRoutes />}>
                    <Route path='/' element={<SignIn />} />
                    <Route path='/products' element={<LazyProductListPage />} />
                    <Route path='/product/:id' element={<ProductDetail />} />
                </Route>

                <Route path='*' element={<h1>Not Found</h1>} />
            </Routes>
        </Router>
    );
}

export { AppRoutes };