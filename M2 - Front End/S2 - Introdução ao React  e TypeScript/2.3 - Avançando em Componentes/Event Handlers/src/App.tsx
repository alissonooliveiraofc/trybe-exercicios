import './App.css'
import Button from './components/Button'

function App() {
  
  function handleClick() {
    alert('Meu primeiro event handler com React')
  }
  return (
    <>
      <Button onClick={ handleClick } />
    </>
  )
}

export default App
