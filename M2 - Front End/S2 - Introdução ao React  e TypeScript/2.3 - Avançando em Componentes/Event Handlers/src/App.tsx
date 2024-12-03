import './App.css'
import Button from './components/Button'

function App() {
  
  function handleClick(text: string) {
    alert(text);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
  }
    

  return (
    <>
      <Button onClick={() => handleClick('Botão 1 na tela!')}>BOTÃO 1</Button>
      <Button onClick={() => handleClick('Botão 2 na tela!')}>BOTÃO 2</Button>

      <p>Veja o console log enquanto digita...</p>
      <input name='input' type="text" onChange={(event) => handleChange(event)}/>
    </>
  )
}

export default App
