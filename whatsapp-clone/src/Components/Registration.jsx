import { Row, Form, Col, Container, Button } from "react-bootstrap";

const Registration = () => 

<>
<Container>
<Form>
  <Row className="mb-3">
  <Form.Group as={Col} controlId="formGridUsername">
      <Form.Label>Username</Form.Label>
      <Form.Control type="username" placeholder="Username" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Row>



    

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Container>
</>
export default Registration;