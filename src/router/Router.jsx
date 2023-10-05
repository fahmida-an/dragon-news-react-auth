import Root from '../layout/Root/Root'
import { createBrowserRouter } from "react-router-dom"
import Home from '../pages/Home/Home'

const router = new createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]

    }
])

export default router;