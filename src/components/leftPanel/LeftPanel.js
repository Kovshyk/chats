import React, {useEffect, useMemo, useState} from 'react';
import {dataUsers, dataUserObject} from '../../data/dataUsers'
import './leftPanel.css'

const LeftPanel = ({changeChat, rerender,setMessage, setVisible, visible,userParams,setUser}) => {
    const [search, setSearch] = useState('')
    const [render, setRender] = useState('')
    const [dataUser, setDataUsers] = useState(dataUsers)
    useEffect(() => {
        setRender(rerender)
    }, [rerender])
    const sorted = useMemo(() => {
        return [...dataUser].sort((a, b) => -a['lastMessage'].localeCompare(b['lastMessage']))
    }, [render])
    const sortedAndSearch = useMemo(() => {
        return [...sorted].filter(dataUsers => dataUsers.userName.toLowerCase().includes(search.toLowerCase()))
    }, [search, sorted])


    return (
        <div className='leftPanel' style={window.innerWidth< 768 ? visible ? {display:'grid'} : {display:'none'}  : []}>

            <div className='header'>
                <div className='userMenu'><div className='userName'><img data-src={userParams.photo} alt=""/> <h1>{userParams.name}</h1></div> <button onClick={()=> {
                    setUser(false)
                    localStorage.setItem('login', 0)
                }}>Logout</button> </div>

                <label className='search'><i className="bi bi-search"/>
                    <input placeholder='Search' type="text"
                           value={search}
                           onChange={(e) => setSearch(e.target.value)}/></label>
            </div>
            <div className='chats'>
                <h2>Chats</h2>
                <div className='contacts'>
                    {sortedAndSearch.map(user => {
                        user.lastMessage = dataUserObject[user.user_id].messages[dataUserObject[user.user_id].messages.length - 1].time[0]
                        return (
                            <div key={user.user_id} onClick={() => {
                                changeChat(user.user_id)
                                setMessage('')
                                setVisible(false)
                            }}>
                                <div className="contact">
                                    <div><img src={user.userPhoto} alt=""/></div>
                                    <div className='chat_name'>
                                        <p>{user.userName}</p>
                                        <div className='last_message'>

                                    <span>{dataUserObject[user.user_id].messages[dataUserObject[user.user_id].messages.length - 1].message
                                    }</span></div>
                                    </div>
                                    <div className='date'><span>
                            {dataUserObject[user.user_id].messages[dataUserObject[user.user_id].messages.length - 1].time[1]}

                            </span></div>

                                </div>
                                <hr style={{borderColor: '#f5f5f5', borderWidth: '1px'}}/>
                            </div>
                        )
                    })}


                </div>
            </div>
        </div>
    );
};

export default LeftPanel;