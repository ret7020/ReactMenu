import React, { useEffect, useState } from 'react';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import { Root } from './Routes/root.jsx';
import userContext from './Contexts/user';
import { routes } from './Routes/routes';
import { NotFound } from './Pages/NotFound';
import { PageLoading } from './Components/PageLoading.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <NotFound />,
        children: routes
    },
    {
        path: 'login',
        async lazy() {
            let { Login } = await import("./Pages/Login.jsx");
            return { Component: Login };
        },
    }
]);


const App = () => {
    const [user, setUser] = useState({ userInfo: null, loading: true, loggedIn: false });
    useEffect(() => {
        console.log("Check auth");
        setUser({ userInfo: { id: 1, firstName: 'test' }, loggedIn: true, loading: false });
        // setTimeout(function () { // Fake api time simulation to check correct context checking
            
        //     console.log("User fake loaded");
        // }, 2000);



    }, [])
    return (
        <userContext.Provider value={{ userInfo: user.userInfo, loading: user.loading, loggedIn: user.loggedIn }}>
            <RouterProvider router={router} fallbackElement={<PageLoading />} />
        </userContext.Provider>
    )
}

export default App;