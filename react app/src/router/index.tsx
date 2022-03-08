import { Navigate, useRoutes } from 'react-router-dom';
import Index from '@/pages/index'
import NotFound from '@/pages/404'
import Records from '@/pages/records';
 


export default function routers() {

    return useRoutes([
        { path: '/', element: <Index /> },
        { path: '/records', element: <Records /> },
        { path: '/404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> }
    ])
}