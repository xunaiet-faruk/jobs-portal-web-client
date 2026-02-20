import {
    createBrowserRouter,

} from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Homepages from "../layout/Homepages";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Addjobs from "../pages/Addjobs";

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
                element:<Addjobs/>
            }
        ]
    },
]);