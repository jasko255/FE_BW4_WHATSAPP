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
import { Form, Button, Container } from "react-bootstrap";
import '../src/Components/Login.css'

const ADDRESS = 'http://localhost:3001'
const socket = io(ADDRESS, { transports: ['websocket'] })






function App() {

  const [username, setUsername] = useState('')
  const [input, setInput] = useState('')
  // const [chatHistory, setChatHistory] = useState([])
  // const [message, setMessage] = useState('')

  // const [loggedin, setLoggedin] = useState(false)
  // const [onlineUsers, setOnlineUsers] = useState([])

  console.log(input);


  return (
    <div className="App">
      {!username ? (
        <Container className='login'>
        <h3>Sign in!</h3>
            <Form  onSubmit={setUsername}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" onChange={(e)=> setInput(e.target.value)} placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
        
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"   placeholder="Password" />
              </Form.Group>
            
              <Button onClick={setUsername} variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
      ) : (

        
      <div className="app_body">
        <Router>
          
{/*           
    <Registration /> */}

          <Sidebar user={input}/>
          
          <Chat user={input} />
        </Router>
      </div>
      )

      }
    </div>
  );
}

export default App;
