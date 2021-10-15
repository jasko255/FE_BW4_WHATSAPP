import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Chat from "./Components/Chat";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import { io } from 'socket.io-client'
import { useState } from "react";
// // import MainApp from './Components/MainApp';
import Login from './Components/Login';
import Registration from "./Components/Registration";


const ADDRESS = 'http://localhost:3001'
const socket = io(ADDRESS, { transports: ['websocket'] })






function App() {

  const [username, setUsername] = useState('')
  const [chatHistory, setChatHistory] = useState([])
  const [message, setMessage] = useState('')

  const [loggedin, setLoggedin] = useState(false)
  const [onlineUsers, setOnlineUsers] = useState([])




  return (
    <div className="App">
      <div className="app_body">
        <Router>
          
          
    <Login />
    <Registration />

          {/* <Sidebar />
          
          <Chat /> */}
        </Router>
      </div>
    </div>
  );
}

export default App;
