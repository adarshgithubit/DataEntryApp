import './App.css';
import AddUser from './components/AddUser';
import AllUser from './components/AllUser';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';


function App() {
  return (
   <>
  <Header/>
  <Navbar/>
  <HomePage/>
  <AllUser/>
  <AddUser/>
  
   </>
  );
}

export default App;
