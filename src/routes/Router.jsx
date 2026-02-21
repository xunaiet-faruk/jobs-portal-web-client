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
            },
            {
                path:'/myjobs',
                element:<Myjobs/>
            },
            {
                path:'/jobdetails/:id',
                
                element:<Jobdetails/>
            },
        ]
    },
]);