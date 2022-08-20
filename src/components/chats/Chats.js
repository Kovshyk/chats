import React, {useEffect, useMemo, useState} from 'react';
import Chat from "../chat/Chat";
import LeftPanel from "../leftPanel/LeftPanel";
import {dataUsers, dataUserObject} from '../../data/dataUsers'

const Chats = ({userParams, setUser}) => {
    const [activeChat, setActiveChat] = useState('small')
    const [chuck, setChuck] = useState(' ')
    const [lastMessage, setLastMessage] = useState()
    const [message, setMessage] = useState('')
    const [visible, setVisible] = useState(true)
    dataUsers.map(users => {
        dataUserObject[users.user_id].messages = localStorage.getItem(users.user_id) ? JSON.parse(localStorage.getItem(users.user_id)) : localStorage.setItem(users.user_id, JSON.stringify(dataUserObject[users.user_id].messages));
    })
    useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(res => res.json())
            .then((result) => {

                setChuck(result.value);
            })
    }, [dataUserObject[activeChat].messages[dataUserObject[activeChat].messages.length - 1].message])
    return (
        <section>
            <div className='content'>
                <LeftPanel changeChat={setActiveChat}
                           rerender={lastMessage}
                           setMessage={setMessage}
                           visible={visible}
                           setVisible={setVisible}
                           userParams={userParams}
                           setUser={setUser}
                />
                <Chat activeChat={activeChat}
                      chuck={chuck}
                      setLastMessage={setLastMessage}
                      message={message}
                      setMessage={setMessage}
                      visible={visible}
                      setVisible={setVisible}
                      userParams={userParams}
                />
            </div>
        </section>
    );
};

export default Chats;