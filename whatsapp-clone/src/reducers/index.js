import { initialState } from '../store'



const mainReducer = (store = initialState, action) => {
  switch (action.type) {
    // case 'INIT_SOCKET':
    

    //   return {
      
    //     ...state
        
         
        
    //   }

    // case 'SET_USER_INFO':
    //   return {
    //     ...state
        
    //   }

    //   case 'SET_ACTIVE_CHAT':
    //     return {
    //       ...state
          
    //     }


    //     case 'SET_HISTORY':
    //         return {
    //           ...state
    //         }

            case "NEW_MESSAGE":
  
  // if (action.payload.message.sender === store.userInfo._id) 
  //   store.socket.emit("outgoing-msg", action.payload)
  //   console.log(store.chats);
  console.log([...store.chat,  action.payload]);
  return {
    ...store,     
     chat: [...store.chat,  action.payload]
      
  }

              

    default:
      //   console.log('NOT RECOGNIZED ACTION!')
      return store
  }
}

export default mainReducer

// INIT_SOCKET
// gets fired when the main app is rendering for the first time after login: initializes a socket.io client and stores it in the store.
// SET_USER_INFO
// payload: { userInfo: User }
// updates the user info in the store. To use when editing the profile before sending the PUT request, as well as when logging in and retrieving the user info.
// SET_ACTIVE_CHAT
// payload: { chatId: string }
// updates the current active chat in the main chat component, which supposedly has a React.useEffect listening to this change and reacting accordingly.
// SET_HISTORY
// payload: { chatId: string, history: Message[] }
// sets the history for the requested chatId with the history in the payload. To be used when retrieving the history for a chat.
// NEW_MESSAGE 
// payload: { chatId: string, message: Message }
// appends the message to the history of the chat with _id equal to chatId
// (i.e. store.chats.list[action.payload.chatId])
// if you are the sender of the message, (i.e. message.sender === store.userInfo._id) then you should  also store.socket.emit the appropriate event (check the Socket.io guidelines)