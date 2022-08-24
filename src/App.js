import './App.css';
import MainForm from './Component/MainForm';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import ChatRoom from './Component/ChatRoom';
 
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route index element={<MainForm/>}></Route>
          <Route path="/chat/:roomName" element={<ChatRoom/>}></Route>
          <Route path='*' element={<h1>not found</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
