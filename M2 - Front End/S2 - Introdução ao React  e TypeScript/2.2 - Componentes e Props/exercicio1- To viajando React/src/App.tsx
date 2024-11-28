import Header from './components/Header';
import CardList from './components/CardList';
import './App.css';

function App() {
  
  return (
    <main>
      <Header />
      <div className='card-container'>
        <CardList />
      </div>
    </main>
  )
}

export default App
