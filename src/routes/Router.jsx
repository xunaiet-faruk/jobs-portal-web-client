import {
    createBrowserRouter,

} from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Homepages from "../layout/Homepages";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Addjobs from "../pages/Addjobs";
import Myjobs from "../pages/Myjobs";
import Jobdetails from "../component/Homepages/Jobdetails";
import Mybids from "../pages/Mybids";
import Owneraction from "../pages/Owneraction";
import Privateroute from "./Privateroute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout/>,
        children : [
            {
                index : true,
                element : <Homepages/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/add-job',
                element: <Privateroute><Addjobs /></Privateroute>
            },
            {
                path:'/myjobs',
                element: <Privateroute><Myjobs /></Privateroute>
            },
            {
                path:'/jobdetails/:id',
                element:<Jobdetails/>
            },
            {
                path:'/mybids',
                element: <Privateroute><Mybids /></Privateroute>
            },
            {
                path:'/request',
                element: <Privateroute><Owneraction /></Privateroute>
            },
        ]
    },
]);