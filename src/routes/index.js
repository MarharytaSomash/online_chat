import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import DashboardLayout from "../layouts/dashboard";
import { DEFAULT_PATH } from "../config";
import LoadingScreen from "../components/LoadingScreen";
import MainLayout from "../layouts/main";
import ResetPassword from "../pages/auth/ResetPassword";
import NewPassword from "../pages/auth/NewPassword";
import Group from "../pages/dashboard/Group";
import Call from "../pages/dashboard/Call";

const Loadable = (Component) => (props) => {
    return (
        <Suspense fallback={<LoadingScreen />}>
            <Component {...props} />
        </Suspense>
    );
};

export default function Router() {
    return useRoutes([
        {
            path: "/auth",
            element: <MainLayout />,
            children: [
                { element: <LoginPage />, path: "login" },
                { element: <RegisterPage />, path: "register" },
                { element: <ResetPassword />, path: "reset_password" },
                { element: <NewPassword />, path: "new_password" },
            ],
        },

        {
            path: "/",
            element: <DashboardLayout />,
            children: [
                { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
                { path: "app", element: <GeneralApp /> },
                { path: "settings", element: <Settings /> },
                { element: <Group />, path: "group" },
                { element: <CallPage />, path: "call" },
                { path: "404", element: <Page404 /> },
                { path: "*", element: <Navigate to="/404" replace /> },
            ],
        },
        { path: "*", element: <Navigate to="/404" replace /> },
    ]);
}

const GeneralApp = Loadable(lazy(() => import("../pages/dashboard/GeneralApp")));
const Settings = Loadable(lazy(() => import("../pages/dashboard/Settings")));
const LoginPage = Loadable(lazy(() => import("../pages/auth/Login")));
const RegisterPage = Loadable(lazy(() => import("../pages/auth/Register")));
const ResetPasswordPage = Loadable(lazy(() => import("../pages/auth/ResetPassword")));
const NewPasswordPage = Loadable(lazy(() => import("../pages/auth/NewPassword")));
const GroupPage = Loadable(lazy(() => import("../pages/dashboard/Group")));
const CallPage = Loadable(lazy(() => import("../pages/dashboard/Call")));

const Page404 = Loadable(lazy(() => import("../pages/Page404")));
