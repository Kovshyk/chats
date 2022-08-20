import React, {useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom'


import Chats from "./chats/Chats";
import Login from "./login/Login";

const AppRouter = () => {
const userIn = localStorage.getItem('login')
    const userData=JSON.parse(localStorage.getItem('userData'))
    const [user, setUser]=useState(false);
    const [userParams, setUserParams]=useState({
        name:'',
        id:'',
        photo:''
    })
    useEffect(()=>{
        if (userIn==1){
            setUser(true)
            setUserParams(userData)
        }
    }, [])

    console.log(userData)

    return (
        <Routes>
            {
                user ? <Route index element={<Chats userParams={userParams} setUser={setUser}/>} exact={true}/> : <Route index element={<Login setUser={setUser} setUserParams={setUserParams}/>} exact={true}/>
            }
        </Routes>
    )
};

export default AppRouter;