import React, {useEffect, useMemo, useState} from 'react';
import Chat from "../chat/Chat";
import LeftPanel from "../leftPanel/LeftPanel";
import {dataUsers, dataUserObject} from '../../data/dataUsers'

const Chats = () => {
    const [activeChat, setActiveChat] = useState('funny')
    const [lastMessage, setLastMessage]=useState()
    dataUsers.map(users=>{
      dataUserObject[users.user_id].messages=localStorage.getItem(users.user_id) ? JSON.parse(localStorage.getItem(users.user_id)) : localStorage.setItem(users.user_id, JSON.stringify(dataUserObject[users.user_id].messages));
    })
    return (
        <section>
            <div className='content'>
                <LeftPanel changeChat={setActiveChat}/>
                <Chat activeChat={activeChat} lastMessage={lastMessage} setLastMessage={setLastMessage}/>
            </div>
        </section>
    );
};

export default Chats;