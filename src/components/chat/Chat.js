import React, {useEffect, useMemo, useState} from 'react';
import './chat.css'
import {dataUserObject} from '../../data/dataUsers'
import moment from 'moment';


const Chat = ({activeChat, setLastMessage}) => {


    const [message, setMessage] = useState('')
    const addMessage = () => {
        if (message === '') return
        setLastMessage(Math.random())
        dataUserObject[activeChat].messages.push(
            {
                id: 'name',
                userName: 'lol',
                time:[moment().format('MMM Do YY, h:mm:ss a'), moment().format('MMM Do YY')],
                message: message

            });
        localStorage.setItem(dataUserObject[activeChat].user_id, JSON.stringify(dataUserObject[activeChat].messages))
        setMessage('')


    }
    return (
        <div className='chat'>
            <div className='top'>

                <div><img src={dataUserObject[activeChat].userPhoto} alt=""/></div>
                <h3>{dataUserObject[activeChat].userName}</h3>

            </div>


            <div className='chat_field'>
                <ul>
                    {
                        dataUserObject[activeChat].messages.map(messages => {
                                let positionText = 'left';
                                let colorText = 'white';
                                if (messages.id === dataUserObject[activeChat].user_id) {
                                    positionText = 'left'
                                    colorText = 'white'
                                } else {
                                    positionText = 'right'
                                    colorText = 'black'
                                }
                                return (
                                    <li className={positionText}>
                                        <div>
                                            <div><img src={dataUserObject[activeChat].userPhoto} alt=""/></div>
                                            <p className={colorText}>{messages.message}</p></div>
                                        <span> {messages.time[0]}</span></li>
                                )
                            }
                        )
                    }


                </ul>


            </div>


            <div className='message'>
                <label><textarea placeholder='Type your message...' value={message}
                                 onChange={e => setMessage(e.target.value)} tabIndex={1}
                                 onKeyPress={(e) => e.key === 'Enter' && addMessage()}/><i
                    className="bi bi-send" onClick={addMessage}/></label>

            </div>

        </div>

    )

};

export default Chat;