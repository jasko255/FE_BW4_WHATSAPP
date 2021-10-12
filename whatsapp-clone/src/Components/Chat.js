import { Avatar, IconButton } from '@material-ui/core'
import React, { useState } from 'react'
import './Chat.css'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { AttachFile, InsertEmoticon, Mic, SearchOutlined } from '@material-ui/icons'


function Chat() {


        const [input, setInput] = useState('')


    const sendMessage = (e) => {
        e.preventDefault()
        console.log('Youu typed', input);

        setInput('')
    }



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
        
        <p className={`chat__message ${true && 'chat__receiver'}`}>
            <span className="chat__name">
                Janusz
            </span>
            Heey guys
            <span className="chat__timestamp">3:52pm</span>
                    </p>
        </div>
        <div className="chat__footer">
        <InsertEmoticon />
        <form >
            <input value={input} onChange={(e)=> setInput(e.target.value)} type="text" placeholder='Type a message'/>
            <button onClick={sendMessage} type='submit'>Send a message</button>
        </form>
        <Mic />
        </div>

            
        </div>
    )
}

export default Chat
