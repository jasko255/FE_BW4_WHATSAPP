import { Avatar, IconButton } from '@material-ui/core'
import React, { useState } from 'react'
import './Chat.css'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { AttachFile, InsertEmoticon, Mic, SearchOutlined } from '@material-ui/icons'
import { connect } from 'react-redux'
import { newMessageAction } from '../actions'



const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
  sendMess: (input) => dispatch(newMessageAction(input))
})


function Chat({sendMess, chat } ) {


        const [input, setInput] = useState('')


    const sendMessage = (input, e) => {
        e.preventDefault()
       sendMess(input)
        console.log('Youu typed',  input);

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
        {

            chat?.map((mes,i) => 

               <p key={i} className={`chat__message ${true && 'chat__receiver'}`}>
            <span className="chat__name">
                Janusz
            </span>
            {mes}
            <span className="chat__timestamp">3:52pm</span>
                    </p>
                )
        }
        </div>
        <div className="chat__footer">
        <InsertEmoticon />
        <form >
            <input value={input} onChange={(e)=> setInput(e.target.value)} type="text" placeholder='Type a message'/>
            <button onClick={(e)=> sendMessage(input, e)} type='submit'>Send a message</button>
        </form>
        <Mic />
        </div>

            
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);



