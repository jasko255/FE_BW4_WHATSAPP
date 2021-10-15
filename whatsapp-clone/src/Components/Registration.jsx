import { Row, Form, Col, Container, Button } from "react-bootstrap";
import './Registration.css'
const Registration = () => 

<>
<Container className='registration'>
  <h3>Sign up!</h3>
<Form>
  
  <Form.Group as={Col} controlId="formGridUsername">
      <Form.Label>Username</Form.Label>
      <Form.Control type="username" placeholder="Username" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>




    

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Container>
</>
export default Registration;