/* eslint-disable */
import React, {useEffect} from 'react';
import jwtDecode from "jwt-decode";
import './login.css'
import {dataUserObject} from "../../data/dataUsers";
const Login = ({setUser, setUserParams}) => {
    const  handleCallbackResponse=(response)=>{
          let userObject=jwtDecode(response.credential);
          console.log(userObject)
        setUser(true)
        setUserParams({name:userObject.name, photo:userObject.picture, id:userObject.sub})
        localStorage.setItem('login', 1)
        localStorage.setItem('userData', JSON.stringify({name:userObject.name, photo:userObject.picture, id:userObject.sub}))
    }

    useEffect(()=>{
        google.accounts.id.initialize({
            client_id:'727757244753-p23l83qi94qp9e2ojciin47pgdgpn9h0.apps.googleusercontent.com',
            callback:handleCallbackResponse
        })
        google.accounts.id.renderButton(
            document.getElementById('signInDiv'),
            {theme:'outline', size:'large'}
        )
    }, [])
    return (
        <div className='login'>
            <h1>Hello! Please, login with Google account:</h1>
            <div id='signInDiv'></div>
        </div>
    );
};

export default Login;