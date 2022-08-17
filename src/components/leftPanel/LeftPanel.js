import React from 'react';
import {dataUsers, dataUserObject} from '../../data/dataUsers'
import  './leftPanel.css'
const LeftPanel = ({changeChat}) => {
    const year = new Date().getFullYear();
    const month=new Date().toLocaleString('en', { month: 'short' });
    const day=new Date().getDate();

    return (
        <div className='leftPanel'>

                <div className='header'>
                    <div><img src="http://placekitten.com/200/300" alt=""/></div>
                    <label className='search'><i className="bi bi-search"></i><input placeholder='Search' type="text"/></label>
            </div>
            <div className='chats'>
                <h2>Chats</h2>
                <div className='contacts'>
                {dataUsers.map(user=>{
                    return (
                        <div key={user.user_id}  onClick={()=>changeChat(user.user_id)}>
                            <div className="contact">
                                <div><img src={user.userPhoto} alt=""/></div>
                                <div className='chat_name'>
                                    <p>{user.userName}</p>
                                    <div className='last_message'>

                                    <span  >{dataUserObject[user.user_id].messages[dataUserObject[user.user_id].messages.length-1].message
                                    }</span></div>
                                </div>
                                <div className='date'><span>
                            {dataUserObject[user.user_id].messages[dataUserObject[user.user_id].messages.length-1].time[1]}
                            </span></div>

                            </div>
                            <hr style={{borderColor:'#f5f5f5', borderWidth:'1px'}}/>
                        </div>
                    )
                })}


                </div>
            </div>
        </div>
    );
};

export default LeftPanel;