import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Pages/Login/Login';
import Signup from './components/Pages/Login/Signup';
import Home from './components/Pages/Home/Home';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path='/login' element={<Login/>}/>
       </Routes>
       {/* <Home/> */}
       <Login/>
    </div>
  );
}

export default App;
