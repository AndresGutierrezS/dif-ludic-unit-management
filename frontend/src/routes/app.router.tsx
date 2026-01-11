import { createBrowserRouter } from "react-router-dom";
import { ManagementLayout } from "../management/layouts/ManagementLayout";
import { HomePage } from "../management/pages/home/HomePage";
import { AuthLayout } from "../auth/layouts/AuthLayout";
import { LoginPage } from "../auth/pages/login/LoginPage";
import { RegisterPage } from "../auth/pages/register/RegisterPage";
import { DashboardPage } from "../management/pages/dashboard/DashboardPage";
import { AdminLayout } from "../admin/layouts/AdminLayout";
import AdminDashboard from "../admin/pages/AdminDashboard";
import { MinorDetailPage } from "../management/pages/Minors/MinorDetailPage";


export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <ManagementLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'dashboard',
                element: <DashboardPage />
            },
            {
                path: 'minors/:curp',
                element: <MinorDetailPage />
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <LoginPage />
            },
            {
                path: 'register',
                element: <RegisterPage />,
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout/>,
        children: [
            {
                index: true,
                element: <AdminDashboard/>
            }
        ]
    }
]);