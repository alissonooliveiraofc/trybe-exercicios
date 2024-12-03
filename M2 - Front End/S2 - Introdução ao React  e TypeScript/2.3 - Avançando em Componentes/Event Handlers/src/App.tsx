import './App.css'
import Button from './components/Button'

function App() {
  
  function handleClick(text: string) {
    alert(text);
  }

  return (
    <>
      <Button onClick={() => handleClick('Botão 1 na tela!')}>BOTÃO 1</Button>
      <Button onClick={() => handleClick('Botão 2 na tela!')}>BOTÃO 2</Button>
    </>
  )
}

export default App
