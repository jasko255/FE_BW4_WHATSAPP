export const addSocket = (socket_id) => ({
    type: 'INIT_SOCKET',
    payload: socket_id
  })


  export const setUser = (User) => ({
    type: 'SET_USER_INFO',
     userInfo: User 
  })


  export const setActive = (socket_id) => ({
    type: 'SET_ACTIVE_CHAT',
   
  })


//   export const addSocket = (socket_id) => ({
//     type: 'SET_HISTORY',
//     payload: socket_id,
//   })


  export const newMessageAction = (text) => ({
    type: 'NEW_MESSAGE',
    payload: text
  })