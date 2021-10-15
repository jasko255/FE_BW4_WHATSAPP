import { Container, Nav } from "react-bootstrap";

const Chatwindow = () => 
<>
{/* <Container fluid className=' bg-dark'> */}
<Nav  className=' bg-dark' activeKey="/home">
  <Nav.Item>
    <Nav.Link href="/home">Tetiana</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  eventKey="link-1">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
  
</Nav>

<Container className='footer'>


</Container>

</>


 
export default Chatwindow;