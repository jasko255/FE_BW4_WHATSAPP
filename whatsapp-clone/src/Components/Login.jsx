import { Form, Button, Container } from "react-bootstrap";
import './Login.css'
import { useState } from "react";



const Login = ({setUsername}) => {



const [input, setInput] = useState('')
const [input2, setInput2] = useState('')
console.log(setUsername);

const submitData = (e) => {
   e.preventDefault()
}
  
return (
  <>
  <Container className='login'>
<h3>Sign in!</h3>
    <Form  onSubmit={submitData}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" onChange={(e)=> setInput(e.target.value)} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" onChange={(e)=> setInput2(e.target.value)}  placeholder="Password" />
      </Form.Group>
    
      <Button onClick={setUsername} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </Container>
  </>
)
}
export default Login;
