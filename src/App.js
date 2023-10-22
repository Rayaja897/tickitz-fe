import './style/App.css';
import './style/App.mobile.css';

import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './pages/Home';

// list page
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "about",
        element: <div>About</div>,
    },
]);

function App() {
    // register to application
    return <RouterProvider router={router} />;
}

export default App
