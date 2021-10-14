import { createStore } from "redux";
import mainReducer from "../reducers";

export const initialState = {userInfo: {
    _id: '',
    name: '',
    email: '',
    avatar: ''
},
 
    
      chat  :   []
    
,
socket: ''
};

 const configureStore = createStore(
  mainReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default configureStore