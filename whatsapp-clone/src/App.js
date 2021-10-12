import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat';
// import MainApp from './Components/MainApp';
// import Login from './Components/Login';

function App() {
  return (
    <div className="App">
    
    <div className="app_body">
    <Sidebar />
    <Chat />

    </div>

    </div>
  );
}

export default App;
