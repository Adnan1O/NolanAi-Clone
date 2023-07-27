import './App.css';
import Home from './Home/Home'
import {Route, Routes} from  'react-router-dom'
import Login from './Login/Login';
import { AuthContextProvider } from './AuthContext';
import Dashboard from './Scriptwriting/Dashboard';
import { useEffect, useState } from 'react';
import Workspace from './Workspace/Workspace';
function App() {
  const [title, setTitle] = useState('')
  const [plot, setPlot] = useState('')
  const [genre, setGenre] = useState('')

  const setValues=({value1, value2, value3})=>{
    setTitle(value1);
    setPlot(value2);
    setGenre(value3);
  }
useEffect(()=>{
  console.log(title, plot, genre)
},[setValues])
  return (
    <div className="App">
      <AuthContextProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard setValues={setValues}/>}/>
        <Route path='/workspace' element={<Workspace title={title} plot={plot} genre={genre}/>}/>
      </Routes>
       </AuthContextProvider>
    </div>
  );
}

export default App;
