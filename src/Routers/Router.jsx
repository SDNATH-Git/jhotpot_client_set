import {
    createBrowserRouter,
} from "react-router";
import Homelayout from "../Layout/Homelayout";
import Home from "../Home/Home";
import Error from "../Home_components/Error";
import Login from "../Pages/AuthPage/Login";
import Register from "../Pages/AuthPage/Register";
import Coverage from "../Components/Coverage/Coverage";
import SendParcel from "../Components/SendParcel";
import PrivateRoute from "../Provider/PrivateRoute";
import BeARider from "../Components/BeARider";
import AuthLayout from "../Layout/AuthLayout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Homelayout></Homelayout>,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "/coverage",
                element: <Coverage></Coverage>,
                loader: () => fetch('./serviceCenter.json'),
            },
            {
                path: '/sendParcel',
                element: <PrivateRoute><SendParcel></SendParcel></PrivateRoute>,
                loader: () => fetch('./serviceCenter.json')
            },
            {
                path: '/beARider',
                element: <PrivateRoute><BeARider></BeARider></PrivateRoute>,
                loader: () => fetch('./serviceCenter.json')
            },
            {

            },
        ]
    },
    {
        path: '/',
        Component: AuthLayout,
        children: [
            {
                path: "/login",
                Component: Login,
            },
            {
                path: "/register",
                Component: Register,
            },

        ]
    },
]);

export default router;

