import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomeLayout from "../Layout/HomeLayout";
import Login from "../Pages/AddUser/Login";
import Signup from "../Pages/AddUser/Signup";

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
]);

export default router;