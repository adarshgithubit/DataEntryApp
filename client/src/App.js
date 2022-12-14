import './App.css';
import AddUser from './components/AddUser';
import AllUser from './components/AllUser';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes,Route}from 'react-router-dom'
import EditUser from './components/Edit';

function App() {
  return (
   <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
     <Route path='/' element ={<HomePage/>} />
     <Route path='all' element = {<AllUser/>} />
     <Route path='add' element={<AddUser/>} />
     <Route path = '/edit/:id' element={<EditUser/>}/>
  </Routes>
  </BrowserRouter>
  
   </>
  );
}

export default App;
