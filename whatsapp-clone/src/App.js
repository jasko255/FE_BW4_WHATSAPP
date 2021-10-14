import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Chat from "./Components/Chat";
import {BrowserRouter as Router, Switch} from "react-router-dom";
// // import MainApp from './Components/MainApp';
// import Login from './Components/Login';
// import Registration from "./Components/Registration";

function App() {
  return (
    <div className="App">
      <div className="app_body">
        <Router>
          
{/*           
    <Login />
    <Registration /> */}

          <Sidebar />
          
          <Chat />
        </Router>
      </div>
    </div>
  );
}

export default App;
