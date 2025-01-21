import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import CoffeeList from './pages/coffee-list';
import Coffee from './pages/coffee';
import NavBar from './components/Navbar';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/cafes" element={ <CoffeeList /> } />
        <Route path="/cafes/:cafe" element={ <Coffee /> } />
      </Routes>
    </>
  );
}

export default App;
