import React from 'react';
import {Route, Routes} from 'react-router-dom'


import Chats from "./chats/Chats";
import Login from "./login/Login";

const AppRouter = () => {

    const user=true;

    return (
        <Routes>
            {
                user ? <Route index element={<Chats/>} exact={true}/> : <Route index element={<Login/>} exact={true}/>
            }
        </Routes>
    )
};

export default AppRouter;