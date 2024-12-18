import './App.css'

function App() {

  return (
    <>
      <form>
        <label>
          Nome
          <input />
        </label>
        <label>
          E-mail
          <input />
        </label>
        <label>
          Escolaridade
          <select>
            <option value="Médio">Médio</option>
            <option value="Superior">Superior</option>
            <option value="Pós-graduação">Pós-graduação</option>
          </select>
        </label>
        <label>
          Resumo das experiências
          <textarea maxLength={500} style={{ width: '300px', height: '150px', backgroundColor: 'black', padding: '10px' }} />
        </label>
        <button>Enviar</button>
      </form>
    </>
  )
}

export default App
