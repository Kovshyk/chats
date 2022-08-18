import React, {useEffect} from 'react';
import {dataUserObject} from "../data/dataUsers";
import {activeChat} from './chats/Chats'
const Fetch = () => {
    useEffect(()=>{
        fetch('https://api.chucknorris.io/jokes/random')
            .then(res=>res.json())
            .then((result)=>{

                setChuck(result.value);
            })
    }, [dataUserObject[activeChat].messages[dataUserObject[activeChat].messages.length-1].message])
};

export default Fetch;