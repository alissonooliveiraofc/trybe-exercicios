import './App.css'
import Button from './components/Button'

function App() {
  
  function handleClick() {
    alert('BOTÃO 1')
  }

  function handleClick2() {
    alert('BOTÃO 2')
  }
  return (
    <>
      <Button onClick={handleClick}>BOTÃO 1</Button>
      <Button onClick={handleClick2}>BOTÃO 2</Button>
    </>
  )
}

export default App
