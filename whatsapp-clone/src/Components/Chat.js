import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import './Chat.css'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { AttachFile, SearchOutlined } from '@material-ui/icons'


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
        <IconButton>
        <SearchOutlined />
          </IconButton> 
          <IconButton>
        <AttachFile />
          </IconButton>
        <IconButton>
        <MoreVertIcon />
        </IconButton>
        </div>
        </div>
        <div className="chat__body">
        
        <p className="chat__message">
            <span className="chat__name">
                Janusz
            </span>
            Heey guys
            <span className="chat__timestamp">3:52pm</span>
                    </p>
        </div>
        <div className="chat__footer">

        </div>

            
        </div>
    )
}

export default Chat
