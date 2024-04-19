import { lazy } from 'react';

const menuData = [
    {
        path: '/dashboard',
        component: lazy(() => import('../pages/Dashboard')),
    },
    {
        path: '/transaction/detail/:id',
        component: lazy(() => import('../pages/Transaction/UpdateTransaction')),
    },
    {
        path: '/transaction/create',
        component: lazy(() => import('../pages/Transaction/CreateTransaction')),
    },
    {
        path: '/transaction',
        component: lazy(() => import('../pages/Transaction/TransactionList')),
    },
    {
        path: '/customer',
        component: lazy(() => import('../pages/Customer')),
    },
    {
        path: '/laundry-package',
        component: lazy(() => import('../pages/LaundryPackage')),
    },
    {
        path: '/payment-type',
        component: lazy(() => import('../pages/PaymentType')),
    },
    {
        path: '/employee',
        component: lazy(() => import('../pages/Employee')),
    },
    {
        path: '/identity',
        component: lazy(() => import('../pages/Identity')),
    },
    {
        path: '/my-profile',
        component: lazy(() => import('../pages/MyProfile')),
    },
    {
        path: '/search',
        component: lazy(() => import('../pages/GlobalSearch')),
    }
]

export default menuData;