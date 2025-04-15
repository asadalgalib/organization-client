import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomeLayout from "../Layout/HomeLayout";
import Login from "../Pages/AddUser/Login";
import Signup from "../Pages/AddUser/Signup";
import Dashboardlayout from "../Layout/DashboardLayout";
import AllUser from "../Pages/AdminDash/AllUser";
import Stats from "../Pages/AdminDash/Stats";
import AddEvents from "../Pages/AdminDash/AddEvents";
import ManageEvents from "../Pages/AdminDash/ManageEvents";
import Donor from "../Pages/AdminDash/Donor";
import Volunteer from "../Pages/AdminDash/Volunteer";
import Joinus from "../Pages/Home/Joinus";
import JoinDonor from "../Pages/Joinus/JoinDonor";
import JoinVolunteer from "../Pages/Joinus/JoinVolunteer";
import JoinApply from "../Pages/Joinus/JoinApply";
import JoinLayout from "../Layout/JoinLayout";

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
        path : '/joinus',
        element : <JoinLayout></JoinLayout>,
        children : [
            {
                path : '/joinus/',
                element : <JoinApply></JoinApply>
            },
            {
                path : '/joinus/donor',
                element : <JoinDonor></JoinDonor>
            },
            {
                path : '/joinus/volunteer',
                element : <JoinVolunteer></JoinVolunteer>
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
                element : <Stats></Stats>
            },
            {
                path : '/dashboard/admin/addevents',
                element : <AddEvents></AddEvents>
            },
            {
                path : '/dashboard/admin/allevents',
                element : <ManageEvents></ManageEvents>
            },
            {
                path : '/dashboard/admin/donor',
                element : <Donor></Donor>
            },
            {
                path : '/dashboard/admin/volunteer',
                element : <Volunteer></Volunteer>
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