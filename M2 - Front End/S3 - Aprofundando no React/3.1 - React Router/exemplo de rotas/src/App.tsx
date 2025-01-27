import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import CoffeeList from './pages/coffee-list';
import Coffee from './pages/coffee';
import NavBar from './components/Navbar';
import NotFound from './pages/not-found';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <NavBar /> }>
          <Route index element={ <Home /> } />
          <Route path="/cafes" element={ <CoffeeList /> } />
          <Route path="/cafes/:cafe" element={ <Coffee /> } />
        </Route>
        <Route path="/*" element={ <NotFound />} />
      </Routes>
    </>
  );
}

export default App;
