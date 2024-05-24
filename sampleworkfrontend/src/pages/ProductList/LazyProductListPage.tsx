import React from 'react';
import { LoadingComponent } from '../../components/Loading/Loading.component';

const ProductListPage = React.lazy(() => import('./ProductListPageDefault'));

const LazyProductListPage = () => {
    return (
        <React.Suspense fallback={<LoadingComponent />}>
            <ProductListPage />
        </React.Suspense>
    );
}

export { LazyProductListPage };