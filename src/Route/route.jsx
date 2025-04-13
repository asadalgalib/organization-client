import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomeLayout from "../Layout/HomeLayout";
import Login from "../Pages/AddUser/Login";
import Signup from "../Pages/AddUser/Signup";
import Dashboardlayout from "../Layout/DashboardLayout";
import AllUser from "../Pages/AdminDash/AllUser";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <HomeLayout></HomeLayout>
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/Signup',
                element : <Signup></Signup>
            }
        ]
    },
    {
        path : '/dashboard',
        element : <Dashboardlayout></Dashboardlayout>,
        children : [
            // admin route
            {
                path : '/dashboard/admin/stats',
            },
            {
                path : '/dashboard/admin/user',
                element : <AllUser></AllUser>
            },
            // volunteer route
            {
                path : '/dashboard/volunteer/stats',
            },
            // user route
            {
                path : '/dashboard/user/stats',
            },
        ]
    }
]);

export default router;