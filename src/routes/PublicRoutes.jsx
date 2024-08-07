import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";

const Router=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/services',
                element:<Services/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            }
        ]
    }
])

export default Router;