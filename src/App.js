
import './App.css';
import Dashboard from './components/Dashboard';
import { Sidebar } from './components/Sidebar';
import Stream from './components/Stream';
import Login from './components/Login';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes} from 'react-router-dom'


function App() {
  return (
    <div className="App" >
    <Routes>
        
        <Route path="/" element={ <Dashboard/> } /> 
</Routes>
    </div>
    
  );
}

export default App;
