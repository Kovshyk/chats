import React, {useCallback, useEffect, useMemo, useState} from 'react';
import './chat.css'
import {dataUserObject} from '../../data/dataUsers'
import moment from 'moment';


const Chat = ({activeChat, setLastMessage, chuck, setMessage, message, setVisible, visible}) => {

    const addMessage = (id, name, message) => {
        if (message === '') return
        if (message === ' ') return
        setLastMessage(Math.random())
        dataUserObject[activeChat].messages.push(
            {
                id: id,
                userName: name,
                time:[moment().format('MMM Do YY, h:mm:ss a'), moment().format('MMM Do YY'), Date.now()],
                message: message

            });
        localStorage.setItem(dataUserObject[activeChat].user_id, JSON.stringify(dataUserObject[activeChat].messages))
        setMessage('')


       // setTimeout(chuckMessage, 1000)
        //setSendMessage(false)
    }

useEffect(()=>{
    if(dataUserObject[activeChat].messages[dataUserObject[activeChat].messages.length-1].id===activeChat)return

 setTimeout(()=>{
       addMessage(dataUserObject[activeChat].user_id, dataUserObject[activeChat].userName, chuck)
 },6000)
},[dataUserObject[activeChat].messages[dataUserObject[activeChat].messages.length-1].id])


    return (
        <div className='chat'  style={ window.innerWidth<768 ? visible ? { display:'none'} : {display:'grid'}  : []}>
            <div className='top'>

                <div><img src={dataUserObject[activeChat].userPhoto} alt=""/></div>
                <h3>{dataUserObject[activeChat].userName}</h3>
                <button className='closeChat' onClick={()=>setVisible(true)}><i className="bi bi-x-lg"/></button>
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
                                    <li className={positionText} key={messages.time[2]}>
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
                                 onKeyDown={(e) => e.key === 'Enter' && addMessage('lol', 'lolol',message)}
                                onKeyUp={(e) => e.key === 'Enter' && setMessage('')}/><i
                    className="bi bi-send" onClick={()=>addMessage('lol', 'lolol',message)}/></label>

            </div>

        </div>

    )

};

export default Chat;