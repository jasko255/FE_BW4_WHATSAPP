// import { Container } from "react-bootstrap";

import { Row, Col} from "react-bootstrap";
import Chatwindow from "./Chatwindow";
import Sidebar from "./Sidebar";


const MainApp = () => 
<>
    <Row>
<Col    md={2}>

<Sidebar />
</Col>
<Col md={10} className='ml-0'>
<Chatwindow />
</Col>
    </Row>
     

</>
 
export default MainApp;