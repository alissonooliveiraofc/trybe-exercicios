import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Coffe from './pages/coffee';
import CoffeList from './pages/coffee-list';
import NavBar from './components/Navbar';
import './App.css';

function App() {

  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coffe" element={<Coffe />} />
      <Route path="/coffe-list" element={<CoffeList />} />
    </Routes>
    </>
    
  )
}

export default App;
