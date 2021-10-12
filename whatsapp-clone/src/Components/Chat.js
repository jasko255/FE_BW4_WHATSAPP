import { Avatar } from '@material-ui/core'
import React from 'react'
import './Chat.css'


function Chat() {
    return (
        <div className='chat'>

        <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
            <h3>Room name</h3>
            <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
            
        </div>
        </div>
        <div className="chat__body">

        </div>
        <div className="chat__footer">

        </div>

            
        </div>
    )
}

export default Chat
